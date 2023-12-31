import { actionCases } from "./constants";

export const initialState = {
  userInfo: undefined,
  newUser: false,
  allContactPage: false,
  currentChatUser: undefined,
  messages: [],
  socket: undefined,
  messageSearch: false,
  userContacts: [],
  onlineUsers: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionCases.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.userInfo,
      };

    case actionCases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };

    case actionCases.SET_ALL_CONTACT_PAGE: {
      return {
        ...state,
        allContactPage: !state.allContactPage,
      };
    }

    case actionCases.CHANGE_CURRENT_CHAT_USER:
      return {
        ...state,
        currentChatUser: action.user,
      };

    case actionCases.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };

    case actionCases.SET_SOCKET:
      return { ...state, socket: action.socket };

    case actionCases.ADD_CHAT_MESSAGE_SOCKET:
      return {
        ...state,
        messages: [...state.messages, action.newMessage],
      };

    case actionCases.SET_MESSAGES_SEARCH:
      return {
        ...state,
        messageSearch: !state.messageSearch,
      };

    case actionCases.SET_USERS_CONTACTS:
      return {
        ...state,
        userContacts: action.userContacts,
      };
    case actionCases.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers,
      };

    default:
      return state;
  }
};

export default reducer;
