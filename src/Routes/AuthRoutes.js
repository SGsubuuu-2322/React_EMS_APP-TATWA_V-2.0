import Home from "../Pages/Home";
import UserProfile from "../Pages/UserProfile";

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
