import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import App from './App';
import {Provider} from 'react-redux';


// Redux 

// Selector
const DeleteOperation = "DeleteOperation";
const InsertOperation = "InsertOperation";
const SessionOperation = "SessionOperation";

// Action : Define a Action Name
export const DeleteAction = () => ({type:DeleteOperation})
export const InsertAction = () => ({type:InsertOperation})
export const SessionAction = () => ({type:SessionOperation})

//


const initialValue ={
    message : "No Operation Choosen",
    islogged : false
}
// Reducer : Code Implementation of Action
const ActionReducer = (state = initialValue,actions) =>{
    switch (actions.type){
        case SessionOperation:
            return{
                ...state,
                message : (!state.islogged ? "Your Session is Started" : "Your Session is Ended"),              
                islogged : !state.islogged
            } 
        case DeleteOperation:
            return {
                ...state,
                message :"Delete operation Choosen"
            }
        case InsertOperation:
            return{
                ...state,
                message : "Insert operation Choosen"
            } 
        default :
            return {
                ...state
            }
    }
}

// Store
let store = createStore(ActionReducer);
/*  store.subscribe(()=>{ console.log(store.getState())});

// Dispatch
store.dispatch(DeleteAction());
store.dispatch(InsertAction()); */

ReactDOM.render(<Provider store = {store}>
                    <h1>Index.js file Heading</h1>
                    <App />
                </Provider>, document.getElementById('root'));
registerServiceWorker();
