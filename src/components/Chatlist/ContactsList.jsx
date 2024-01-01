import { useStateProvider } from "@/context/StateContext";
import { actionCases } from "@/context/constants";
import { GET_ALL_USERS } from "@/utils/ApiRoutes";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiSearchAlt2 } from "react-icons/bi";
import ChatLIstItem from "./ChatLIstItem";

function ContactsList() {
  const [{}, dispatch] = useStateProvider();

  const [allContacts, setAllContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchContacts, setSearchContacts] = useState([]);

  useEffect(() => {
    if (searchTerm.length) {
      const filterData = {};
      Object.keys(allContacts).forEach((key) => {
        filterData[key] = allContacts[key].filter((obj) =>
          obj.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      });
      setSearchContacts(filterData);
    } else {
      setSearchContacts(allContacts);
    }
  }, [searchTerm]);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const {
          data: { users },
        } = await axios.get(GET_ALL_USERS);

        setAllContacts(users);
        setSearchContacts(users);
      } catch (error) {
        console.log(error);
      }
    };
    getAllUsers();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-end h-24 px-3 py-5">
        <div className="flex items-center gap-12 text-white">
          <BiArrowBack
            className="text-lg cursor-pointer "
            title="Back to chat list"
            onClick={() => dispatch({ type: actionCases.SET_ALL_CONTACT_PAGE })}
          />
          <span>New Chat</span>
        </div>
      </div>
      <div className="flex items-center gap-3 pl-5 text-white bg-search-input-container-background h-14">
        <div className="flex items-center flex-grow gap-5 py-1 rounded-lg bg-panel-header-background">
          <div>
            <BiSearchAlt2 className="text-lg cursor-pointer text-panel-header-icon" />
          </div>
          <div>
            <input
              type="text"
              placeholder="search contacts"
              className="w-full text-sm text-white bg-transparent focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      {Object.entries(searchContacts).map(([initialLetter, userList]) => {
        return (
          userList.length > 0 && (
            <div key={Date.now() + initialLetter}>
              <div className="py-5 pl-10 text-teal-light">{initialLetter}</div>

              {userList?.map((user) => {
                return (
                  <ChatLIstItem
                    key={user?.id}
                    data={user}
                    isContactPage={true}
                  />
                );
              })}
            </div>
          )
        );
      })}
    </div>
  );
}

export default ContactsList;
