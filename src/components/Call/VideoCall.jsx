import { useStateProvider } from "@/context/StateContext";
import React from "react";

import dynamic from "next/dynamic";
const Container = dynamic(() => import("./Container"), { ssr: false });

function VideoCall() {
  const [{ videoCall }] = useStateProvider();
  return <Container data={videoCall} />;
}

export default VideoCall;
