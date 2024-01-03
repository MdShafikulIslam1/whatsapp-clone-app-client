import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { GET_GEGO_TOKEN } from "@/utils/ApiRoutes";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineCallEnd } from "react-icons/md";

function Container({ data }) {
  const [{ userInfo, socket }, dispatch] = useStateProvider();
  const [acceptedCall, setAcceptedCall] = useState(false);
  const [zegoToken, setZegoToken] = useState(undefined);
  const [zgVar, setZgVar] = useState(undefined);
  const [localStream, setLocalStream] = useState(undefined);
  const [publishStream, setPublishStream] = useState(undefined);

  useEffect(() => {
    if (data?.type === "out-going") {
      socket.current.on("accept-call", () => setAcceptedCall(true));
    } else {
      setTimeout(() => {
        setAcceptedCall(true);
      }, 1000);
    }
  }, [data]);

  useEffect(() => {
    const getZegoToken = async () => {
      try {
        const {
          data: { token },
        } = await axios.get(`${GET_GEGO_TOKEN}/${userInfo?.id}`);
        setZegoToken(token);
      } catch (error) {
        console.log(error);
      }
    };
    getZegoToken();
  }, [acceptedCall]);

  useEffect(() => {
    const startCall = async () => {
      try {
        import("zego-express-engine-webrtc").then(
          async ({ ZegoExpressEngine }) => {
            const zg = new ZegoExpressEngine(
              73282224,
              "aa44d2079f498893452cd882b2f63326"
            );
            setZgVar(zg);

            setZgVar(zg);
            zg.on(
              "roomStreamUpdate",
              async (roomId, updateType, streamList, extendedData) => {
                if (updateType === "ADD") {
                  const remoteVideo = document.getElementById("remote-video");
                  const vd = document.createElement(
                    data?.callType === "video" ? "video" : "audio"
                  );
                  vd.id = streamList[0].streamID;
                  vd.autoplay = true;
                  vd.playsInline = true;
                  vd.muted = false;
                  if (remoteVideo) {
                    remoteVideo.appendChild(vd);
                  }
                  zg.startPlayingStream(streamList[0].streamID, {
                    audio: true,
                    video: true,
                  }).then((stream) => (vd.srcObject = stream));
                } else if (
                  updateType === "DELETE" &&
                  zg &&
                  localStream &&
                  streamList[0].extraInfo
                ) {
                  zg.destroyStream(localStream);
                  zg.stopPublishingStream(streamList[0].streamID);
                  zg.loginRoom(data?.roomId.toString());
                  dispatch({ type: actionCases.END_CALL });
                }
              }
            );
            await zg.loginRoom(
              data?.roomId.toString(),
              zegoToken,
              { userID: userInfo?.id.toString(), userName: userInfo?.name },
              { userUpdate: true }
            );

            const localStream = await zg.createStream({
              camera: {
                audio: true,
                video: data?.callType === "video" ? true : false,
              },
            });
            setLocalStream(localStream);
            const localVideo = document.getElementById("local-audio");
            const videoElement = document.createElement(
              data?.callType === "video" ? "video" : "audio"
            );
            videoElement.id = "video-local-zego";
            videoElement.className = "w-32 h-28";
            videoElement.autoplay = true;
            videoElement.muted = false;
            videoElement.playsInline = true;
            localVideo.appendChild(videoElement);
            const td = document.getElementById("video-local-zego");
            td.srcObject = localStream;
            const streamID = "2024" + Date.now();
            setPublishStream(streamID);
            setLocalStream(localStream);
            zg.startPublishingStream(streamID, localStream);
          }
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (zegoToken) {
      startCall();
    }
  }, [zegoToken]);

  const endCall = () => {
    if (zgVar && localStream && publishStream) {
      zgVar.destroyStream(localStream);
      zgVar.stopPublishingStream(publishStream);
      zgVar.logoutRoom(data?.roomId.toString());
    }
    if (data.type === "voice") {
      socket.current.emit("reject-voice-call", { from: data.id });
    } else {
      socket.current.emit("reject-video-call", { from: data.id });
    }
    dispatch({ type: actionCases.END_CALL });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full border-l bg-conversation-panel-background border-conversation-border h-[100vh] overflow-hidden text-white">
      <div className="flex flex-col items-center gap-3">
        <span className="text-5xl">{data?.name}</span>
        <span>
          {acceptedCall && data?.callType !== "voice"
            ? "On going call"
            : "Calling"}
        </span>
      </div>
      {(!acceptedCall || data?.callType === "voice") && (
        <div className="my-24">
          <Image
            src={data?.profilePhoto}
            alt="user-photo"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
      )}

      <div className="relative my-5" id="remote-video">
        <div className="absolute bottom-5 right-5" id="local-audio"></div>
      </div>

      <div className="flex items-center justify-center w-16 h-16 bg-red-500 rounded-full">
        <MdOutlineCallEnd
          className="text-3xl cursor-pointer"
          onClick={endCall}
        />
      </div>
    </div>
  );
}

export default Container;
