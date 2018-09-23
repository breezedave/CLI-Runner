import { createStore } from "redux";
import * as reducers from "../reducers/index.js";

const store = createStore(reducers.rootReducer);

export default store;
