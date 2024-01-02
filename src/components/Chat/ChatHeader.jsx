import React, { useState } from "react";
import Avatar from "../common/Avatar";
import { MdCall } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import ContextMenu from "../common/ContextMenu";

function ChatHeader() {
  const [{ currentChatUser }, dispatch] = useStateProvider();
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const showContextMenu = (e) => {
    e.preventDefault();
    setIsContextMenuVisible(true);
    setContextMenuCoordinates({ x: e.pageX - 50, y: e.pageY + 25 });
  };

  const contextMenuOptions = [
    {
      name: "Exist",
      callback: () => {
        dispatch({ type: actionCases.SET_EXIST_CHAT });
      },
    },
  ];

  const handelVoiceCall = () => {
    dispatch({
      type: actionCases.SET_VOICE_CALL,
      voiceCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "voice",
        roomId: Date.now(),
      },
    });
  };

  const handelVideoCall = () => {
    dispatch({
      type: actionCases.SET_VIDEO_CALL,
      videoCall: {
        ...currentChatUser,
        type: "out-going",
        callType: "video",
        roomId: Date.now(),
      },
    });
  };

  return (
    <div className="z-10 flex items-center justify-between h-16 px-4 py-3 bg-panel-header-background">
      <div className="flex items-center justify-center gap-6">
        <Avatar type={"sm"} image={currentChatUser?.profilePhoto} />
        <div className="flex flex-col">
          <span className="text-primary-strong">{currentChatUser?.name}</span>
          <span className="text-sm text-secondary">online/offline</span>
        </div>
      </div>
      <div className="flex gap-6">
        <MdCall
          onClick={handelVoiceCall}
          className="text-xl cursor-pointer text-panel-header-icon"
        />
        <IoVideocam
          onClick={handelVideoCall}
          className="text-xl cursor-pointer text-panel-header-icon"
        />
        <BiSearchAlt2
          onClick={() => dispatch({ type: actionCases.SET_MESSAGES_SEARCH })}
          className="text-xl cursor-pointer text-panel-header-icon"
        />
        <BsThreeDotsVertical
          className="text-xl cursor-pointer text-panel-header-icon"
          onClick={(e) => showContextMenu(e)}
          id="context-opener"
        />
        {isContextMenuVisible && (
          <ContextMenu
            options={contextMenuOptions}
            coordinates={contextMenuCoordinates}
            contextMenu={isContextMenuVisible}
            setContextMenu={setIsContextMenuVisible}
          />
        )}
      </div>
    </div>
  );
}

export default ChatHeader;
