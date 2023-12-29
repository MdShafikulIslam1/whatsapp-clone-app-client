import { useStateProvider } from "@/context/StateContext";
import { ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";

function MessageBar() {
  const [{ userInfo, currentChatUser }] = useStateProvider();
  const [message, setMessage] = useState("");
  const sendMessageHandler = async () => {
    try {
      const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
        message,
        to: currentChatUser?.id,
        from: userInfo?.id,
      });
      console.log("Sent message", data);
      if (data?.data?.status) {
        alert("message sent successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative flex items-center h-20 gap-6 px-4 bg-panel-header-background">
      <>
        <div className="flex gap-6">
          <BsEmojiSmile
            className="text-xl cursor-pointer text-panel-header-icon"
            title="Emoji"
          />
          <ImAttachment
            className="text-xl cursor-pointer text-panel-header-icon"
            title="Attachment file"
          />
        </div>
        <div className="flex items-center w-full h-10 rounded-lg">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full h-10 px-5 text-sm text-white rounded-lg bg-input-background focus:outline-none"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-center w-10">
          <button>
            <MdSend
              className="text-xl cursor-pointer text-panel-header-icon"
              title="Send Message"
              onClick={sendMessageHandler}
            />
            {/* <FaMicrophone
              className="text-xl cursor-pointer text-panel-header-icon"
              title="Send Message"
            /> */}
          </button>
        </div>
      </>
    </div>
  );
}

export default MessageBar;
