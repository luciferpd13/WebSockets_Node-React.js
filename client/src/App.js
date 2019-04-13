import React, { Component } from 'react';
import  './App.css';
import Msg from './Msg/Msg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p  align='center'>Implement web - socket at server end using node such that it sends data to all the connected clients as soon as it receives data from a http post request </p>
        <h3 align='center'>You will recieve your messages here</h3>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <Msg />
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
