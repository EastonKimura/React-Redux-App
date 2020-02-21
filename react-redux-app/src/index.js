import axios from "axios"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTER = "UPDATE_CHARACTER";
export const SET_ERROR = "SET_ERROR";
export const getData = (i) => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
  .get(`https://rickandmortyapi.com/api/character/${i}`)
    .then(res => {
      console.log(i, "count", res);
      dispatch({ type: UPDATE_CHARACTER, payload: res.data });
    })
    .catch(err => {
      console.error("error fetching data from api, err: ", err);
      dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
    });
};