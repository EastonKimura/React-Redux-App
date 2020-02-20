import React from 'react';
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"

import { characterReducer as reducer } from "./reducers/characterReducer"
import './App.css';

import CharacterForm from "./components/CharacterForm"
import CharacterDiv from "./components/CharacterDiv"

const store = createStore(reducer, applyMiddleware(thunk))
export default function App() {
  return (
    <Provider store={store}>
      <CharacterForm />
      <CharacterDiv />
    </Provider>
  );
}