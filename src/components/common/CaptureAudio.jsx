import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { ADD_AUDIO_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {
  FaMicrophone,
  FaPauseCircle,
  FaPlay,
  FaStop,
  FaTrash,
} from "react-icons/fa";
import { MdSend } from "react-icons/md";
import WaveSurfer from "wavesurfer.js";

function CaptureAudio({ setShowAudioRecorder }) {
  const [{ userInfo, socket, currentChatUser }, dispatch] = useStateProvider();

  const [isRecording, setIsRecording] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [waveform, setWaveform] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [renderedAudio, setRenderedAudio] = useState(null);

  const audioRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const waveformRef = useRef(null);

  useEffect(() => {
    let interval;
    interval = setInterval(() => {
      setRecordingDuration((preDuration) => {
        setTotalDuration(preDuration + 1);
        return preDuration + 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isRecording]);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: waveformRef.current,
      waveColor: "#ccc",
      progressColor: "#4a9eff",
      cursorColor: "#7ae3c6",
      barWidth: 2,
      height: 30,
      responsive: true,
    });

    setWaveform(waveSurfer);

    waveSurfer.on("finish", () => {
      setIsPlaying(false);
    });

    return () => {
      waveSurfer.destroy();
    };
  }, []);

  useEffect(() => {
    if (waveform) handleStartRecording();
  }, [waveform]);

  const handleStartRecording = () => {
    setRecordingDuration(0);
    setCurrentPlaybackTime(0);
    setTotalDuration(0);
    setIsRecording(true);
    setRecordedAudio(null);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioRef.current.srcObject = stream;
        const chunks = [];
        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          setRecordedAudio(audio);
          waveform.load(audioUrl);
        };
        mediaRecorder.start();
      })
      .catch((err) => {
        console.log("Error accessing microphone: ", err);
      });
  };

  const handleStopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      waveform.stop();

      const audioChunk = [];

      mediaRecorderRef.current.addEventListener("dataavailable", (e) => {
        audioChunk.push(e.data);
      });

      mediaRecorderRef.current.addEventListener("stop", (e) => {
        const audioBlob = new Blob(audioChunk, { type: "audio/mp3" });
        const audioFile = new File([audioBlob], "recording.mp3");
        setRenderedAudio(audioFile);
        setTotalDuration(recordingDuration);
      });
    }
  };

  useEffect(() => {
    if (recordedAudio) {
      const updatePlaybackTime = () => {
        setCurrentPlaybackTime(recordedAudio.currentTime);
      };
      recordedAudio.addEventListener("timeupdate", updatePlaybackTime);
      return () => {
        recordedAudio.removeEventListener("timeupdate", updatePlaybackTime);
      };
    }
  }, [recordedAudio]);

  const handlePlayRecording = () => {
    if (recordedAudio) {
      waveform.stop();
      waveform.play();
      recordedAudio.play();
      setIsPlaying(true);
    }
  };

  const handlePauseRecording = () => {
    waveform.stop();
    recordedAudio.pause();
    setIsPlaying(false);
  };

  // const sendRecording = async () => {
  //   alert("sendRecording");
  //   try {
  //     if (condition) {

  //     }
  //     const formData = new FormData();
  //     formData.append("audio", recordedAudio);
  //     console.log(recordedAudio);

  //     const response = await axios.post(ADD_AUDIO_MESSAGE_ROUTE, formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //       params: {
  //         from: userInfo?.id,
  //         to: currentChatUser?.id,
  //       },
  //     });
  //     if (response.status === 200) {
  //       socket.current.emit("send-message", {
  //         to: currentChatUser?.id,
  //         from: userInfo?.id,
  //         message: response?.data?.message,
  //       });
  //       dispatch({
  //         type: actionCases.ADD_CHAT_MESSAGE_SOCKET,
  //         newMessage: {
  //           ...response?.data.message,
  //         },
  //         fromSelf: true,
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const sendRecording = async () => {
    try {
      if (recordedAudio) {
        const formData = new FormData();
        formData.append("file", renderedAudio);

        const response = await axios.post(ADD_AUDIO_MESSAGE_ROUTE, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          params: {
            from: userInfo?.id,
            to: currentChatUser?.id,
          },
        });

        if (response.status === 200) {
          socket.current.emit("send-message", {
            to: currentChatUser?.id,
            from: userInfo?.id,
            message: response?.data?.message,
          });

          dispatch({
            type: actionCases.ADD_CHAT_MESSAGE_SOCKET,
            newMessage: {
              ...response?.data.message,
            },
            fromSelf: true,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-end w-full text-2xl">
      <div className="p-1">
        <FaTrash
          className="text-panel-header-icon"
          onClick={() => setShowAudioRecorder(false)}
        />
      </div>
      <div className="flex items-center justify-center gap-3 px-4 py-2 mx-4 text-lg text-white rounded-full bg-search-input-container-background drop-shadow-lg">
        {isRecording ? (
          <div className="text-center text-red-500 animate-pulse">
            Recording <span>{recordingDuration} s</span>
          </div>
        ) : (
          <div className="">
            {recordedAudio && (
              <>
                {isPlaying ? (
                  <FaStop onClick={handlePauseRecording} />
                ) : (
                  <FaPlay onClick={handlePlayRecording} />
                )}
              </>
            )}
          </div>
        )}
        <div className="w-60" ref={waveformRef} hidden={isRecording} />
        {recordedAudio && isPlaying && (
          <span>{formatTime(currentPlaybackTime)}</span>
        )}
        {recordedAudio && !isPlaying && (
          <span>{formatTime(totalDuration)}</span>
        )}
        <audio ref={audioRef} hidden />
        <div className="mr-4">
          {isRecording ? (
            <FaPauseCircle
              className="text-blue-500"
              onClick={handleStopRecording}
            />
          ) : (
            <FaMicrophone
              className="text-red-500"
              onClick={handleStartRecording}
            />
          )}
        </div>
        <div>
          <MdSend
            className="mr-4 cursor-pointer text-panel-header-icon"
            title="Send"
            onClick={sendRecording}
          />
        </div>
      </div>
    </div>
  );
}

export default CaptureAudio;
