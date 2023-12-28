import React, { useEffect, useState } from "react";
import ChatListHeader from "./ChatListHeader";
import SearchBar from "./SearchBar";
import List from "./List";
import { useStateProvider } from "@/context/StateContext";
import ContactsList from "./ContactsList";

function ChatList() {
  const [{ allContactPage }] = useStateProvider();
  const [pageType, setPageType] = useState("default");
  useEffect(() => {
    if (allContactPage) {
      return setPageType("all-contacts");
    } else {
      return setPageType("default");
    }
  }, [allContactPage]);
  return (
    <div className="flex flex-col max-h-screen bg-panel-header-background">
      {pageType === "default" && (
        <>
          <ChatListHeader />
          <SearchBar />
          <List />
        </>
      )}

      {pageType === "all-contacts" && <ContactsList />}
    </div>
  );
}

export default ChatList;
