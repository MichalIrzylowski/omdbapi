import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { movies } from "./movies";

const reducers = combineReducers({ movies });

export type AppState = ReturnType<typeof reducers>;

export const createAppStore = () => createStore(reducers, composeWithDevTools());
