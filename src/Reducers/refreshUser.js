const initialState = JSON.parse(localStorage.getItem("allUsers")) || [];

const refreshUser = (state = initialState, action) => {
  if (action.type === "REFRESHUSER") {
    return JSON.parse(localStorage.getItem("allUsers")) || [];
  } else {
    return state;
  }
};

export default refreshUser;
