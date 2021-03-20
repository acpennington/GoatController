import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers/index.js";

export const history = createBrowserHistory();

const store = createStore(rootReducer(history), applyMiddleware(routerMiddleware(history), thunk));

export default store;
