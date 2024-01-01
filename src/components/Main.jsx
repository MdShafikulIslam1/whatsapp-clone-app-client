import React, { useEffect, useRef, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import {
  CHECK_USER_ROUTE,
  GET_ALL_MESSAGES_ROUTE,
  HOST,
} from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import Chat from "./Chat/Chat";
import { io } from "socket.io-client";
import SearchMessages from "./Chat/SearchMessages";
import VoiceCall from "./Call/VoiceCall";
import VideoCall from "./Call/VideoCall";
import IncomingVideoCall from "./common/IncomingVideoCall";

function Main() {
  const router = useRouter();
  const socket = useRef();
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [socketEvent, setSocketEvent] = useState(false);
  const [
    {
      userInfo,
      currentChatUser,
      messages,
      messageSearch,
      voiceCall,
      videoCall,
      incomingVoiceCall,
      incomingVideoCall,
    },
    dispatch,
  ] = useStateProvider();

  useEffect(() => {
    if (redirectToLogin) router.push("/login");
  }, [redirectToLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectToLogin(true);
    if (currentUser?.email && !userInfo) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser.email,
      });
      if (!data?.status) {
        router.push("/login");
      }
      const { id, name, about, email, profilePhoto } = data?.data;
      dispatch({
        type: actionCases.SET_USER_INFO,
        userInfo: {
          id,
          name,
          email,
          profilePhoto,
          status: about,
        },
      });
    }
  });

  useEffect(() => {
    if (userInfo) {
      socket.current = io(HOST);
      socket.current.emit("add-user", userInfo.id);
      dispatch({ type: actionCases.SET_SOCKET, socket });
    }
  }, [userInfo]);

  useEffect(() => {
    if (socket.current && !socketEvent) {
      socket.current.on("received-message", (data) => {
        dispatch({
          type: actionCases.ADD_CHAT_MESSAGE_SOCKET,
          newMessage: { ...data.message },
        });
        socket.current.on(
          "incoming-voice-call",
          ({ from, roomId, callType }) => {
            dispatch({
              type: actionCases.SET_INCOMING_VOICE_CALL,
              incomingVoiceCall: { ...from, roomId, callType },
            });
          }
        );

        socket.current.on(
          "incoming-video-call",
          ({ from, roomId, callType }) => {
            dispatch({
              type: actionCases.SET_INCOMING_VIDEO_CALL,
              incomingVideoCall: { ...from, roomId, callType },
            });
          }
        );

        socket.current.on("voice-call-rejected", () => {
          dispatch({ type: actionCases.END_CALL });
        });

        socket.current.on("video-call-rejected", () => {
          dispatch({ type: actionCases.END_CALL });
        });

        setSocketEvent(true);
      });
    }
  }, [socket.current]);

  useEffect(() => {
    try {
      const getAllMessages = async () => {
        const {
          data: { messages },
        } = await axios.get(
          `${GET_ALL_MESSAGES_ROUTE}/${userInfo?.id}/${currentChatUser?.id}`
        );
        dispatch({ type: actionCases.SET_MESSAGES, messages });
      };
      if (currentChatUser?.id) {
        getAllMessages();
      }
    } catch (error) {
      console.log(error);
    }
  }, [currentChatUser]);

  return (
    <>
      {incomingVideoCall && <IncomingVideoCall />}

      {incomingVoiceCall && <IncomingVoiceCall />}

      {voiceCall && (
        <div className="w-screen h-screen max-h-full overflow-hidden bg-gray-400">
          <VoiceCall />
        </div>
      )}
      {videoCall && (
        <div className="w-screen h-screen max-h-full overflow-hidden bg-gray-400">
          <VideoCall />
        </div>
      )}

      {!voiceCall && !videoCall && (
        <div className="grid w-screen h-screen max-w-full max-h-screen overflow-hidden grid-cols-main">
          <ChatList />
          {currentChatUser ? (
            <div className={messageSearch ? "grid grid-cols-2" : "grid-cols-2"}>
              <Chat />

              {messageSearch && <SearchMessages />}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      )}
    </>
  );
}

export default Main;
