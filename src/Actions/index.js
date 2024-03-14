export const refreshUsers = () => ({
  type: "REFRESHUSER",
});

export const selectUser = (type) => ({
  type: "USERSELECTOR",
  payload: type,
});
