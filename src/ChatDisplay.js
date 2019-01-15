import React from 'react';
import './App.css';
import ChatInput from './ChatInput';

class ChatDisplay extends React.Component {

    addMsg = (msg) => {
        this.props.onAddMsg(msg)
    };
    render() {
      return (
        <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.user.username}</div>

            <ul className="message-list">
            {this.props.messages.map((message, index) => (
                <li
                key={index}
                className={
                    message.username === this.props.user.username ? 'message sender' : 'message recipient'
                }
                >
                <p>{`${message.username}: ${message.text}`}</p>
                </li>
            ))}
            </ul>
            <ChatInput user={this.props.user} onAddMsg={this.addMsg}/>
        </div>
      );
    }
  }
  
  export default ChatDisplay;
  