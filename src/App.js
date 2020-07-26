import React, { Component } from "react";
import {useDispatch, useSelector} from "react-redux";
import {DeleteAction, InsertAction, SessionAction} from "./index";

  const App = () =>{
    const operation = useSelector(state => state);
    const dispatch = useDispatch();
    return (
      <div className="App">
        <h2>This is from App Component</h2>
        <h3>{operation.message}</h3>
        <button onClick = {() => dispatch(SessionAction())}>{operation.islogged ? "LogOut" : "LogIn"}</button>
        <div >
            <button onClick = {() => dispatch(DeleteAction())}>Delete</button> 
            <button onClick = {() => dispatch(InsertAction())}>Insert</button>
        </div>
      </div>
    );
  }


export default App;
