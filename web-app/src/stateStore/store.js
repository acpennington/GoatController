import { createBrowserHistory } from "history";
import { createStore, compose, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducers/index.js";

export const history = createBrowserHistory();

const store = window.__REDUX_DEVTOOLS_EXTENSION__
   ? createStore(
        rootReducer(history),
        compose(applyMiddleware(routerMiddleware(history)), window.__REDUX_DEVTOOLS_EXTENSION__())
     )
   : createStore(rootReducer(history), compose(applyMiddleware(routerMiddleware(history))));

export default store;
