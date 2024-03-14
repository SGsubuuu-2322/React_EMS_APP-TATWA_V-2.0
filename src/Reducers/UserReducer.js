const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  singleUser: {},
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
      return
    }

    default:
      return state;
  }
};
