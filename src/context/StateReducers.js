import { actionCases } from "./constants";

export const initialState = {
  userInfo: undefined,
  newUser: false,
  allContactPage: false,
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

    default:
      return state;
  }
};

export default reducer;
