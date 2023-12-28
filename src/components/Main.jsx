import React, { useEffect, useState } from "react";
import ChatList from "./Chatlist/ChatList";
import Empty from "./Empty";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import Chat from "./Chat/Chat";

function Main() {
  const router = useRouter();
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [{ userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    if (redirectToLogin) router.push("/login");
  }, [redirectToLogin]);

  onAuthStateChanged(firebaseAuth, async (currentUser) => {
    if (!currentUser) setRedirectToLogin(true);
    if (currentUser?.email && !userInfo) {
      const { data } = await axios.post(CHECK_USER_ROUTE, {
        email: currentUser.email,
      });
      console.log("Main check user ", data);
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

  return (
    <>
      <div className="grid w-screen h-screen max-w-full max-h-screen overflow-hidden grid-cols-main">
        <ChatList />
        {/* <Chat /> */}
        <Empty />
      </div>
    </>
  );
}

export default Main;
