import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

function login() {
  const router = useRouter();
  const [{ newUser, userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    if (userInfo?.id && !newUser) router.push("/");
  }, [newUser, userInfo, router]);

  const handleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();

    const {
      user: { displayName: name, email, photoURL: profilePhoto },
    } = await signInWithPopup(firebaseAuth, googleProvider);

    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });

        if (!data.status) {
          dispatch({
            type: actionCases.SET_NEW_USER,
            newUser: true,
          });

          dispatch({
            type: actionCases.SET_USER_INFO,
            userInfo: {
              name,
              email,
              profilePhoto,
              status: "",
            },
          });

          router.push("/onboarding");
        } else {
          const { id, name, about, email, profilePhoto } = data;
          console.log(id, name, about, email, profilePhoto);
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

          router.push("/");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 bg-panel-header-background">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src={"/whatsapp.gif"} alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button
        onClick={handleLogin}
        className="flex items-center justify-center p-5 rounded-lg gap-7 bg-search-input-container-background"
      >
        <FcGoogle className="text-4xl" />
        <span className="text-2xl text-white">Login with google</span>
      </button>
    </div>
  );
}

export default login;
