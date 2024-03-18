// These are some imports of relevant functions from their respective hooks, which will help us to use react's core features...
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { selectUser } from "../Actions";

// This is navbar functional component that have structure and logic written in JSX to be ued in unAuthorized and unProtected routes...
const PublicNav = () => {
  // This is extracting location information from the useLocation hook...
  let location = useLocation();

  // This is extracting the state data from users variable from central store of redux ...
  const { userType } = useSelector((state) => state.users);

  // This is extracting the disPatch method from Redux useDispatch() hook to be used in actions.
  const dispatch = useDispatch();

  // This is handling the dispatch action for changing the state data of central store according to the user choice of radio input...
  const handleOptionChange = (e) => {
    // console.log(e.target.value);
    dispatch(selectUser(e.target.value));
  };
  // console.log(location);

  //  The navbar will show different options depending on if a user wants to login or register as a employee or admin
  return (
    <div className="w-full h-[12%] px-6 mb-6">
      <div className="content w-full bg-zinc-200 flex items-center justify-between px-3 overflow-y-hidden rounded-lg pb-1 border-primary border-b-4 shadow-md shadow-black ">
        <div className="logo-container flex items-center">
          <div className="img-container h-20 w-20">
            <img
              src="https://www.pngitem.com/pimgs/m/523-5233379_employee-management-system-logo-hd-png-download.png"
              alt="EMS logo"
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="text-sky-900 text-2xl font-bold ">EMS</h1>
        </div>

        {/* This is conditional rendering according to exact route location... */}
        {location.pathname === "/register" ? (
          <div className="button-holder h-20 w-40 bg-secondarylite border rounded-md flex justify-around items-center  border-2 overflow-hidden">
            <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
              <div className="image h-10 w-10 overflow-hidden rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8bzRx2cygbkKX_sFD_E7l6QgVPQG0CuPoAy5hB0zFLQ&s"
                  alt="admin-image"
                  className="object-cover "
                />
              </div>
              {/* This radio input is checked after changing of state value from central redux store */}
              <input
                type="radio"
                name="admin"
                value="Admin"
                onChange={handleOptionChange}
                checked={userType === "Admin"}
              />
            </div>
            <div className="admin-container h-20 w-10 flex flex-col justify-center gap-1">
              <div className="image h-10 w-10 overflow-hidden rounded-md">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNH7XVix6MP8CRjz3z4QXri_2PwobuRQ9IDExrR4BCjg&s"
                  alt="admin-image"
                  className="object-cover "
                />
              </div>
              <input
                type="radio"
                name="employee"
                value="Employee"
                onChange={handleOptionChange}
                checked={userType === "Employee"}
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {/* These are some navlink with normal stylings and special stylings-which will shown when that specific navlink is active... */}
        <div className="navigation">
          <ul className="flex gap-10">
            <NavLink
              to="/login"
              className={(e) =>
                `text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all px-3 py-1 ${
                  e.isActive &&
                  "text-primary font-md border border-primary rounded-md"
                }`
              }
            >
              Login
            </NavLink>

            <NavLink
              to={"/register"}
              className={(e) =>
                `text-xl font-medium hover:underline hover:underline-offset-4 hover:text-primary text-xl font-semibold hover:transition-all px-3 py-1 ${
                  e.isActive &&
                  "text-primary font-md border border-primary  rounded-md"
                }`
              }
            >
              Register
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PublicNav;
