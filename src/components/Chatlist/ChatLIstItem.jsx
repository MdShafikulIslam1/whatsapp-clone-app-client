import React from "react";
import Avatar from "../common/Avatar";

function ChatLIstItem({ data, isContactPage = false }) {
  return (
    <div
      className={`flex items-center cursor-pointer hover:bg-background-default-hover`}
    >

      <div className="px-4 pt-3 pb-1 min-w-fit">
        <Avatar type={"lg"} image={data?.profilePhoto}/>
      </div>

      <div className="flex flex-col justify-center w-full min-h-full pr-2 mt-3">
        <div className="flex justify-between">
          <div>
            <span className="text-white">{data?.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLIstItem;
