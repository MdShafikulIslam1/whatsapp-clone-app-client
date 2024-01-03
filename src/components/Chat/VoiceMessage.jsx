import { useStateProvider } from "@/context/StateContext";
import { HOST } from "@/utils/ApiRoutes";
import React, { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import Avatar from "../common/Avatar";
import { FaPlay, FaStop } from "react-icons/fa";
import { calculateTime } from "@/utils/CalculateTime";
import MessageStatus from "../common/MessageStatus";

function VoiceMessage({ message }) {
  const [{ userInfo, currentChatUser }] = useStateProvider();
  const [audioMessage, setAudioMessage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [waveform, setWaveform] = useState(false);
  const [currentPlaybackTime, setCurrentPlaybackTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(0);

  const waveformRef = useRef();
  const waveform = useRef(null);

  useEffect(() => {
    if (waveform.current === null) {
      waveform.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#ccc",
        progressColor: "#4a9eff",
        cursorColor: "#7ae3c6",
        barWidth: 2,
        height: 30,
        responsive: true,
      });

      waveform.current.on("finish", () => {
        setIsPlaying(false);
      });
    }

    return () => {
      // waveform.current.destroy();
      waveform.current = null;
    };
  }, []);

  useEffect(() => {
    const audioUrl = `${HOST}/${message?.message}`;
    const audio = new Audio(audioUrl);
    setAudioMessage(audio);

    if (waveform.current) {
      // waveform.current.load(audioUrl);
      waveform.current.load(audioUrl);
      waveform.current.on("ready", () => {
        setTotalDuration(waveform.current.getDuration());
      });
    }
  }, [message?.message]);

  useEffect(() => {
    if (audioMessage) {
      const updatePlaybackTime = () => {
        setCurrentPlaybackTime(audioMessage.currentTime);
      };
      audioMessage.addEventListener("timeupdate", updatePlaybackTime);
      return () => {
        audioMessage.removeEventListener("timeupdate", updatePlaybackTime);
      };
    }
  }, [audioMessage]);

  const handlePlayAudio = () => {
    if (audioMessage && waveform.current) {
      waveform.current.stop();
      waveform.current.play();
      audioMessage.play();
      setIsPlaying(true);
    }
  };

  const handlePauseAudio = () => { 
    if (waveform.current) {
      waveform.current.stop();
      audioMessage.pause();
      setIsPlaying(false);
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
    <div
      className={`flex items-center text-white gap-5 p-4 text-sm rounded-md ${
        message?.senderId === currentChatUser?.id
          ? " bg-incoming-background"
          : "bg-outgoing-background"
      }`}
    >
      <div>
        <Avatar type={"lg"} image={currentChatUser?.profilePhoto} />
      </div>

      <div className="text-xl cursor-pointer">
        {!isPlaying ? (
          <FaPlay onClick={handlePlayAudio} />
        ) : (
          <FaStop onClick={handlePauseAudio} />
        )}
      </div>

      <div className="w-60" ref={waveformRef}>
        <div className="text-bubble-meta text-[11px] pt-1 justify-between flex w-full absolute bottom-[-22px] ">
          <span>
            {formatTime(isPlaying ? currentPlaybackTime : totalDuration)}
          </span>
          <div className="flex gap-1">
            <span>{calculateTime(message?.createAt)}</span>
            {message?.senderId === userInfo?.id && (
              <MessageStatus messageStatus={message?.messageStatus} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoiceMessage;
