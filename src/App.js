import React, { Component } from "react";
import {useDispatch, useSelector, connect} from "react-redux";
import {DeleteAction, InsertAction, SessionAction} from "./index";

//Class Component 
class App extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="App">
        <h2>This is from App Component</h2>
        <h3>{this.props.message}</h3>
        <h4>session : {JSON.stringify(this.props.islogged)}</h4>
        <button onClick = {() => this.props.session()}>{this.props.islogged ? "LogOut" : "LogIn"}</button>
        <div >
            <button disabled= {!this.props.islogged } onClick = {() => this.props.delete()}>Delete</button> 
            <button disabled= {!this.props.islogged } onClick = {() => this.props.insert()}>Insert</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return{
    delete : () => dispatch(DeleteAction()),
    insert : () => dispatch(InsertAction()),
    session : () => dispatch(SessionAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// Functional Component 
  /*const App = () =>{
    const operation = useSelector(state => state);
    const dispatch = useDispatch();
    return (
      <div className="App">
        <h2>This is from App Component</h2>
        <h3>{operation.message}</h3>
        <h4>session : {JSON.stringify(operation.islogged)}</h4>
        <button onClick = {() => dispatch(SessionAction())}>{operation.islogged ? "LogOut" : "LogIn"}</button>
        <div >
            <button disabled= {!operation.islogged } onClick = {() => dispatch(DeleteAction())}>Delete</button> 
            <button disabled= {!operation.islogged } onClick = {() => dispatch(InsertAction())}>Insert</button>
        </div>
      </div>
    );
  }


export default App;*/

