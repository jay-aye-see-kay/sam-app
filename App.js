import React from "react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

import Root from "./containers/Root";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default class App extends React.Component {
  render = () => {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  };
}
