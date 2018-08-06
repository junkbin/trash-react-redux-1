import React, { Component } from 'react';
import {connect} from 'react-redux';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" onClick={this.props.setName}/>
          <h1 className="App-title">Welcome to {this.props.user.name}</h1>
        </header>
        <p className="App-intro">
        </p>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    "user" : state.user
  }
}

const mastDispatchToProps = (dispatch, ownProps)=>{
  return {
    "setName" : (name)=>{
        dispatch({
          "type" : "UPDATE",
          "payload": {"name":"AFFIXUS SYSTEMS PVT LTD."}
        });
    }
  };
}

export default connect(mapStateToProps, mastDispatchToProps)(App);
