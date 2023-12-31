import Avatar from "@/components/common/Avatar";
import Input from "@/components/common/Input";
import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { ONBOARD_USER_ROUTE } from "@/utils/ApiRoutes";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function onboarding() {
  const router = useRouter();
  const [{ userInfo, newUser }, dispatch] = useStateProvider();
  const [name, setName] = useState(userInfo?.name || "");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("/default_avatar.png");

  useEffect(() => {
    if (!newUser && !userInfo?.email) router.push("/login");
    else if (!newUser && userInfo?.email) router.push("/");
  }, [userInfo, newUser, router]);

  const handleOnboardUser = async () => {
    if (validate()) {
      const email = userInfo?.email;
      console.log("image: ", image);
      try {
        const { data } = await axios.post(ONBOARD_USER_ROUTE, {
          email,
          name,
          about,
          image,
        });

        if (data.status) {
          dispatch({ type: actionCases.SET_NEW_USER, newUser: false });
          dispatch({
            type: actionCases.SET_USER_INFO,
            userInfo: {
              id:data?.id,
              name,
              email,
              status: about,
              profilePhoto: image,
            },
          });

          router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const validate = () => {
    if (name.length < 3) {
      return false;
    }
    return true;
  };
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-6 bg-panel-header-background">
      <div className="flex items-center justify-center gap-2 text-white">
        <Image src={"/whatsapp.gif"} alt="whatsapp" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <h2 className="text-2xl text-white">Create your profile</h2>
      <div className="flex gap-6 mt-6">
        <div className="flex flex-col items-center justify-center gap-5 mt-5">
          <Input name="Display Name" state={name} setState={setName} label />
          <Input name="About" state={about} setState={setAbout} label />
          <div className="flex justify-center items-center">
            <button
              className="flex items-center justify-center p-5 rounded-lg gap-7 bg-search-input-container-background text-white"
              onClick={handleOnboardUser}
            >
              Create Profile
            </button>
          </div>
        </div>
        <div>
          <Avatar type={"xl"} image={image} setImage={setImage} />
        </div>
      </div>
    </div>
  );
}

export default onboarding;
