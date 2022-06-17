import React, { Component } from 'react';
import './index.css';
import Content from './routers/Content';

// Começa o Req 09
class App extends Component {
  render() {
    return (
      <div className="h-screen">
        <Content />
      </div>
    );
  }
}

export default App;
