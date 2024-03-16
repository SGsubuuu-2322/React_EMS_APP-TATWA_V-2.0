// This is importing the combineReducers method from the redux module....
import { combineReducers } from "redux";

// This is importing the userReducer from the redux module....
import { UserReducer } from "./UserReducer";


// This is setting the rootReducer and combine all the reducers into one. for storing it into the single redux store for our app....
const rootRducer = combineReducers({
  users: UserReducer,
});

export default rootRducer;
