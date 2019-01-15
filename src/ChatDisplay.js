import React from 'react';
import './App.css';

class ChatDisplay extends React.Component {

    state = {
        chatMessage: '',
    }

    chatMessageChange = event => {
        this.setState({ chatMessage: event.target.value });

    };

    isDisabled = () => {
        return this.state.chatMessage === '' ? true : false;
    };

    addMsg = event => {
        event.preventDefault();
         let msg = {username: this.props.user.username, 
                    text: this.state.chatMessage}
         this.props.onAddMsg(msg);
         this.setState({ chatMessage: '' });
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
  
              <div>
                <form className="input-group" onSubmit={this.addMsg}>
                  <input type="text" className="form-control" 
                         placeholder="Enter your message..."
                         value={this.state.chatMessage}
                         onChange={this.chatMessageChange} />
                  <div className="input-group-append">
                    <button className="btn submit-button" disabled={this.isDisabled()}>
                      SEND
                    </button>
                  </div>
                </form>
              </div>
            </div>
      );
    }
  }
  
  export default ChatDisplay;
  