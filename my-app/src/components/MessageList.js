import React, { Component } from "react";
import Talk from "talkjs";
const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "Hey, how is it going?",
  },
  {
    senderId: "janedoe",
    text: "Great! How about you?",
  },
  {
    senderId: "perborgen",
    text: "Good to hear! I am great as well",
  },
];

class MessageList extends Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
