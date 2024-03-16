// These are imports of Login and Register components...
import Login from "../Pages/Login";
import Register from "../Pages/Register";

// This is the publicRoutes array for storing objects defining path and elements of Login and Register components...
export const PublicRoutes = [
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/register",
    element: Register,
  },
];
