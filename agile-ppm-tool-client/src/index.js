import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";

const initialState = {
    name: 'Paul',
    secondName: 'Petrov'
}

function reducer (state = initialState, action){
    console.log('reducer')
    switch (action.type){
        case "CHANGE_NAME":
            return {...state, name: action.payload}
        case "CHANGE_SECOND_NAME":
            return {...state, secondName: action.payload}
    }
    return state
}

const store = createStore(reducer)

const changeName = {
    type : 'CHANGE_NAME',
    payload: 'Ivan'
}

const changeSecondName = {
    type : 'CHANGE_SECOND_NAME',
    payload: 'Ivanov'
}

store.dispatch(changeName)

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// reportWebVitals();
