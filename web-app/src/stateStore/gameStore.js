import { createBrowserHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers/gameCombine.js";

export const history = createBrowserHistory();

const gameStore = createStore(rootReducer(history), applyMiddleware(routerMiddleware(history), thunk));

export default gameStore;
