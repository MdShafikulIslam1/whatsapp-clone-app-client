import { useStateProvider } from "@/context/StateContext";
import React from "react";

function ChatContainer() {
  const [{ messages, userInfo, currentChatUser }] = useStateProvider();
  return (
    <div className="h-[80vh] w-full flex-grow relative overflow-auto custom-scrollbar">
      <div className="fixed z-0 w-full h-full bg-fixed bg-chat-background opacity-5"></div>
      <div className="relative bottom-0 left-0 z-40 mx-10 my-6">
        <div className="flex w-full">
          <div className="flex flex-col justify-end w-full gap-1 overflow-auto">
            {messages?.map((message, index) => {
              console.log(message?.message);
              return (
                <div
                  key={index}
                  className={`flex ${
                    message?.senderId === currentChatUser?.id
                      ? "justify-start"
                      : "justify-end"
                  }`}
                >
                  {message?.type === "text" && (
                    <div
                      className={`text-white px-2 py-[5px] text-sm rounded-md flex gap-2 items-end max-w-[45%] ${
                        message?.senderId === currentChatUser?.id
                          ? "bg-incoming-background"
                          : "bg-outgoing-background"
                      }`}
                    >
                      <span className="text-white break-all">
                        {message?.message}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
