import { createStore } from "redux";

import rootRducer from "./Reducers";

const store = createStore(rootRducer);

export default store;
