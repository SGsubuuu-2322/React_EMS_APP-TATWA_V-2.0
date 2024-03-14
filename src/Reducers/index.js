import { combineReducers } from "redux";
import { UserReducer } from "./UserReducer";

const rootRducer = combineReducers({
  users: UserReducer,
});

export default rootRducer;
