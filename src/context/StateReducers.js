import { actionCases } from "./constants";

export const initialState = {
  userInfo: undefined,
  newUser: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionCases.SET_USER_INFO: {
      console.log({userInfo: action.userInfo});
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }

    case actionCases.SET_NEW_USER:
      return {
        ...state,
        newUser: action.newUser,
      };

    default:
      return state;
  }
};

export default reducer;
