import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import dictionary from "../reducers/dictionarySlice";
import history from "../reducers/historySlice";

const rootReducer = combineReducers({
  dictionary: dictionary,
  history: history,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
