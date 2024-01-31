import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { ADD_IMAGE_MESSAGE_ROUTE, ADD_MESSAGE_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import EmojiPicker from "emoji-picker-react";
import React, { useEffect, useRef, useState } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { ImAttachment } from "react-icons/im";
import { MdSend } from "react-icons/md";
import PhotoPicker from "../common/PhotoPicker";

function MessageBar() {
  const [{ userInfo, currentChatUser, socket }, dispatch] = useStateProvider();
  const [message, setMessage] = useState("");
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [graphPhoto, setGraphPhoto] = useState(false);
  const emojiPickerRef = useRef(null);

  const photoPickerHandleChange = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      const response = await axios.post(ADD_IMAGE_MESSAGE_ROUTE, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          from: userInfo?.id,
          to: currentChatUser?.id,
        },
      });

      if (response.status === 200) {
        socket.current.emit("send-message", {
          to: currentChatUser?.id,
          from: userInfo?.id,
          message: response?.data?.message,
        });
        dispatch({
          type: actionCases.ADD_CHAT_MESSAGE_SOCKET,
          newMessage: {
            ...response?.data.message,
          },
          fromSelf: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (graphPhoto) {
      const data = document.getElementById("photo-picker");
      data.click();
    }
    document.body.onfocus = (e) => {
      setTimeout(() => {
        setGraphPhoto(false);
      }, 1000);
    };
  }, [graphPhoto]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.id !== "emoji-open") {
        if (
          emojiPickerRef.current &&
          !emojiPickerRef.current?.contains(event.target)
        ) {
          setShowEmojiModal(false);
        }
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const sendMessageHandler = async () => {
    try {
      const { data } = await axios.post(ADD_MESSAGE_ROUTE, {
        to: currentChatUser?.id,
        from: userInfo?.id,
        message,
      });

      socket.current.emit("send-message", {
        to: currentChatUser?.id,
        from: userInfo?.id,
        message: data?.message,
      });
      dispatch({
        type: actionCases.ADD_CHAT_MESSAGE_SOCKET,
        newMessage: {
          ...data.message,
        },
        fromSelf: true,
      });

      setMessage("");
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
            id="emoji-open"
            onClick={() => setShowEmojiModal(!showEmojiModal)}
          />

          {showEmojiModal && (
            <div
              className="absolute z-40 bottom-24 left-16"
              ref={emojiPickerRef}
            >
              <EmojiPicker
                onEmojiClick={(emoji) =>
                  setMessage((preMessage) => (preMessage += emoji.emoji))
                }
                theme="dark"
              />
            </div>
          )}

          <ImAttachment
            className="text-xl cursor-pointer text-panel-header-icon"
            title="Attachment file"
            onClick={() => setGraphPhoto(true)}
          />
        </div>
        <div className="flex items-center w-full h-10 rounded-lg">
          <input
            type="text"
            placeholder="Type a message"
            className="w-full h-10 px-5 text-sm text-white rounded-lg bg-input-background focus:outline-none"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </div>

        <div className="flex items-center justify-center w-10">
          <button type="submit">
            <MdSend
              className="text-xl cursor-pointer text-panel-header-icon"
              title="Send Message"
              onClick={sendMessageHandler}
            />
          </button>
        </div>
      </>

      {graphPhoto && <PhotoPicker onChange={photoPickerHandleChange} />}
    </div>
  );
}

export default MessageBar;
