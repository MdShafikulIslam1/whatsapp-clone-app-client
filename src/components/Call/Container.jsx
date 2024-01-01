import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlineCallEnd } from "react-icons/md";

function Container({ data }) {
  const [{ userInfo, socket }, dispatch] = useStateProvider();
  const [acceptedCall, setAcceptedCall] = useState(false);

  const endCall = () => {
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
