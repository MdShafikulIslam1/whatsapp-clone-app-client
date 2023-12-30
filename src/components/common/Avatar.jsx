import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";
import ContextMenu from "./ContextMenu";
import PhotoPicker from "./PhotoPicker";
import PhotoLibrary from "./PhotoLibrary";
import CapturePhoto from "./CapturePhoto";

function Avatar({ type, image, setImage }) {
  const [hover, setHover] = useState(false);
  const [isContextMenuVisible, setIsContextMenuVisible] = useState(false);
  const [contextMenuCoordinates, setContextMenuCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [graphPhoto, setGraphPhoto] = useState(false);
  const [showPhotoLibrary, setShowPhotoLibrary] = useState(false);
  const [showCapturePhoto, setShowCapturePhoto] = useState(false);

  const showContextMenu = (e) => {
    e.preventDefault();
    console.log(e.pageX, e.pageY);
    setIsContextMenuVisible(true);
    setContextMenuCoordinates({ x: e.pageX, y: e.pageY });
  };

  const contextMenuOptions = [
    {
      name: "Take Photo",
      callback: () => {
        setShowCapturePhoto(true);
      },
    },
    {
      name: "Choose From Library",
      callback: () => {
        setShowPhotoLibrary(true);
      },
    },
    {
      name: "Upload Photo",
      callback: () => {
        setGraphPhoto(true);
      },
    },
    {
      name: "Remove Photo",
      callback: () => {
        setImage("/default_avatar.png");
      },
    },
  ];

  const photoPickerHandleChange = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const image = document.createElement("img");

    reader.onload = function (event) {
      image.src = event.target.result;
      image.setAttribute("image-src", event.target.result);
    };

    reader.readAsDataURL(file);
    setTimeout(() => {
      setImage(image.src);
    }, 100);
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

  return (
    <>
      <div className="flex items-center justify-center">
        {type === "sm" && (
          <div className="relative w-10 h-10">
            <Image src={image} fill />
          </div>
        )}

        {type === "lg" && (
          <div className="relative h-14 w-14">
            <Image src={image} fill />
          </div>
        )}

        {type === "xl" && (
          <div
            className="relative z-0 cursor-pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <div
              className={`${
                hover ? "visible" : "hidden"
              } z-10 absolute top-0 bottom-0 bg-photopicker-overlay-background h-60 w-60 flex items-center justify-center flex-col text-center gap-2`}
              id="context-opener"
              onClick={(e) => showContextMenu(e)}
            >
              <FaCamera
                className="text-2xl text-white"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              />
              <span
                className="text-white"
                id="context-opener"
                onClick={(e) => showContextMenu(e)}
              >
                Change <br /> Your <br /> Photo
              </span>
            </div>
            <div className="flex items-center justify-center h-60 w-60 ">
              <Image src={image} fill className="rounded-full" />
            </div>
          </div>
        )}
      </div>
      {isContextMenuVisible && (
        <ContextMenu
          options={contextMenuOptions}
          coordinates={contextMenuCoordinates}
          contextMenu={isContextMenuVisible}
          setContextMenu={setIsContextMenuVisible}
        />
      )}
      {showPhotoLibrary && (
        <PhotoLibrary
          setImage={setImage}
          setShowPhotoLibrary={setShowPhotoLibrary}
        />
      )}

      {showCapturePhoto && (
        <CapturePhoto
          setImage={setImage}
          setShowCapturePhoto={setShowCapturePhoto}
        />
      )}

      {graphPhoto && <PhotoPicker onChange={photoPickerHandleChange} />}
    </>
  );
}

export default Avatar;
