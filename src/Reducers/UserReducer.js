const initialState = {
  allUsers: JSON.parse(localStorage.getItem("allUsers")) || [],
  user: false,
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
      return { ...state, user: !state.user };
    }

    default:
      return state;
  }
};
