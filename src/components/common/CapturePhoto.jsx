import React, { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";

function CapturePhoto({ setImage, setShowCapturePhoto }) {
  const videoRef = useRef(null);

  useEffect(() => {
    let stream;
    const startCamera = async () => {
      stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      videoRef.current.srcObject = stream;
    };
    startCamera();

    return () => {
      stream?.getTracks().forEach((track) => track.stop());
    };
  }, []);

  const capturePhoto = () => {
    const canvas = document.createElement("canvas");
    canvas.getContext("2d").drawImage(videoRef.current, 0, 0, 300, 150);
    setImage(canvas.toDataURL("image/jpeg"));
    setShowCapturePhoto(false);
  };
  return (
    <div className="absolute left-1/3 top-1/4 h-4/6 w-2/6 bg-gray-900 flex justify-center items-center gap-6 p-2 rounded-lg">
      <div className="flex flex-col gap-4 w-full justify-center items-center">
        <div
          className="pt-2 pr-2 cursor-pointer flex justify-end items-end text-white"
          onClick={() => setShowCapturePhoto(false)}
        >
          <IoClose className="h-10 w-10" />
        </div>

        <div className="flex justify-center">
          <video src="" id="video" width="400" autoPlay ref={videoRef}></video>
        </div>
        <button
          onClick={capturePhoto}
          className="h-16 w-16 bg-white rounded-full border-8 border-teal-light cursor-pointer p-2 mb-10"
        ></button>
      </div>
    </div>
  );
}

export default CapturePhoto;
