import { useStateProvider } from "@/context/StateContext";
import Image from "next/image";
import React from "react";

function IncomingCall() {
  const [{ incomingVideoCall }, dispatch] = useStateProvider();

  const acceptCall = () => {};

  const rejectCall = () => {};

  return (
    <div className="fixed z-50 flex items-center justify-start h-16 gap-5 p-4 mb-0 text-white border-2 rounded-sm bottom-8 right-6 w-80 bg-conversation-panel-background drop-shadow-2xl border-icon-green py-14 ">
      <div>
        <Image
          src={incomingVideoCall?.profilePhoto}
          alt="profile-image"
          width={70}
          height={70}
        />
      </div>
      <div>
        <div>{incomingVideoCall?.name}</div>
        <div className="text-xm">Income Video call</div>
        <div className="flex gap-2 mt-2">
          <button
            className="p-1 px-3 text-sm bg-red-500 rounded-full"
            onClick={rejectCall}
          >
            Reject
          </button>
          <button
            className="p-1 px-3 text-sm bg-red-500 rounded-full"
            onClick={acceptCall}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomingCall;
