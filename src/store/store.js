import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  { login: { token: localStorage.getItem("token"), error: ''} },
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;