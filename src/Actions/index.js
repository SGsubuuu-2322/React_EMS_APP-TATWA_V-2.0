// These are action functions that triggers the mentioned reducers in the object as type...
export const refreshUsers = () => ({
  type: "REFRESHUSER",
});

export const selectUser = (type) => ({
  type: "USERSELECTOR",
  payload: type,
});
