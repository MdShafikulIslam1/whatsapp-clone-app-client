import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import Image from "next/image";
import React from "react";

function IncomingVideoCall() {
  const [{ incomingVideoCall, socket }, dispatch] = useStateProvider();


  const acceptCall = () => {
    dispatch({
      type: actionCases.SET_VIDEO_CALL,
      videoCall: { ...incomingVideoCall, type: "in-coming" },
    });

    socket.current.emit("accept-incoming-call", { id: incomingVideoCall?.id });
    dispatch({
      type: actionCases.SET_INCOMING_VIDEO_CALL,
      incomingVideoCall: undefined,
    });
  };

  const rejectCall = () => {
    socket.current.emit("reject-video-call", { from: incomingVideoCall?.id });
    dispatch({ type: actionCases.END_CALL });
  };

  return (
    <div className="fixed z-50 flex items-center justify-start h-16 gap-5 p-4 mb-0 text-white border-2 rounded-sm bottom-8 right-6 w-80 bg-conversation-panel-background drop-shadow-2xl border-icon-green py-14 ">
      <div>
        <Image
          src={incomingVideoCall?.profilePhoto || "/avatar/4.png"}
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
            className="p-1 px-3 text-sm rounded-full bg-green-600-500"
            onClick={acceptCall}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomingVideoCall;
