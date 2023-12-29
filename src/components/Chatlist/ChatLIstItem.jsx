import React from "react";
import Avatar from "../common/Avatar";
import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";

function ChatLIstItem({ data, isContactPage = false }) {
  const [{ userInfo, currentChatUser }, dispatch] = useStateProvider();
  const handleContactClick = () => {
    dispatch({
      type: actionCases.CHANGE_CURRENT_CHAT_USER,
      user: { ...data },
    });

    dispatch({ type: actionCases.SET_ALL_CONTACT_PAGE });
  };

  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-background-default-hover`}
      onClick={handleContactClick}
    >
      <div className="px-4 pt-3 pb-1 min-w-fit">
        <Avatar type={"lg"} image={data?.profilePhoto} />
      </div>

      <div className="flex flex-col justify-center w-full min-h-full pr-2 mt-3">
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data?.name}</span>
          </div>
        </div>
        <div className="flex pt-1 pb-2 border-b pe-3 border-conversation-border">
          <div className="flex justify-between w-full">
            <span className="text-sm text-secondary line-clamp-1">
              {data?.about || "\u00A0"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLIstItem;
