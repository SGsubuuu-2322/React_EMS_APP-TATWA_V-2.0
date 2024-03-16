// This is setting initial state object for setting different state variables for this reducer...  
const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  userType: "Employee",
};

//  Reducer function that handles actions dispatched to the store does execution according to action call with or without payload..
export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REFRESHUSER": {
      return {
        ...state,
        allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
      };
    }

    case "USERSELECTOR": {
      return { ...state, userType: action.payload };
    }

    default:
      return state;
  }
};
