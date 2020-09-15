import AppNavigator from "./src/navigation/AppNavigator";
import React from "react";
import {} from "react-native";
import ReduxThunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import remoteDataReducer from "./store/reducers/remoteData";
const rootReducer = combineReducers({
  data: remoteDataReducer,
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
