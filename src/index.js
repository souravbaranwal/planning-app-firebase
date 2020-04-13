import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import firebase from "firebase/app";

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  createFirestoreInstance,
  reduxFirestore,
  getFirestore,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";

import rootReducer from "./reducers/rootReducer";

import fbConfig from "./config/fbConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
);

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
