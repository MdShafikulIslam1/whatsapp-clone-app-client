import Image from "next/image";
import React from "react";

function Empty() {
  return (
    <div className="border-conversation-border bg-panel-header-background border-1 w-full h-screen border-b-8 border-b-icon-green flex justify-center items-center">
      <Image src={"/whatsapp.gif"} alt="whatsapp" height={300} width={300} />
    </div>
  );
}

export default Empty;
