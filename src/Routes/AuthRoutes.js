// These are imports of Home and UserProfile components...
import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";

// This is the ProtectedRoutes array for storing objects defining path and elements of Home and UserProfile components...
export const AuthRoutes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/user-profile/:id",
    element: UserProfile,
  },
];
