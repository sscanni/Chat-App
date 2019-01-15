import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatDisplay from './ChatDisplay';

class App extends Component {

  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
    { username: 'Amy', text: 'Hi, Jon!' },
    { username: 'Amy', text: 'How are you?' },
    { username: 'John', text: 'Hi, Amy! Good, you?' },
    { username: 'John', text: "I'm doing good" },]
  }

  addMsg = message => {
    console.log(message)
    this.setState(prevState => ({
      messages: [...prevState.messages, message] }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div>
        <div className="container">
          <ChatDisplay user={this.state.users[0]} messages={this.state.messages} onAddMsg={this.addMsg}/>
          <ChatDisplay user={this.state.users[1]} messages={this.state.messages} onAddMsg={this.addMsg}/>
        </div>
       </div>
    </div>
    );
  }
}

export default App;
