const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  userType: "Employee",
};

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
