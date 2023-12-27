import React from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";

function ChatList() {
  return (
    <div className="flex flex-col max-h-screen bg-panel-header-background">
      <>
        <ChatListHeader />
        <SearchBar />
        <List />
      </>
    </div>
  );
}

export default ChatList;
