import React from "react";
import MessageForm from "../components/MessageForm";
import MyMessage from "../components/MyMessage";
import TheirMessage from "../components/TheirMessage";

const ChatFeed = (props) => {
  //Lets start by console logging just to see what props are we getting from the ChatFeed
  // console.log(props);
  // Now I then destructured the props that I used in the ChatFeed and
  // you can do that by simply saying const  {..ChatFeed} = props;  from where the
  // structuring this is saying we want to destructure something from props and
  //the things we'll be destructuring will be chats, activeChat, userName and messages.
  //Now lets find our current chat, we're going to put it in a new variable.
  //Stating const chat is equals to if chats exists then find chats and then the <activeChat.
  //So we are looking for that specific activeChat simply by console.log(chat, userName, messages);
  //Now that I  have the message bubble from console logging,  I then created a new functional component
  // which is going to be used for generating messages.
  //Inside of there we have to fetch all our messages.
  //Of course to see this being rendered we just have to call the renderMessage(); fucntion.console.log(keys);
  // by using a callback function.
  //Now we need to know about the messages, we need to know if this is the last message that was sent and we also need to know if its my message.
  // Check if the index is equals to zero then we're going to return null else we're goint to return keys and then index minus one
  //We're basically saying if there are messages make sure to find the last message.
  //To render the message, we put this dynamic block of code and we're going to say if is my message then ternary (?) and if not or otherwise (:)
  //if it is my message we're goint to render <MyMesssage/> Component, if it is not my message then we're goint to render a new component called <TheirMessage/>
  //Inline style takes two double curly braces style={{padding: ' 1px'}}
  //Then created a structure of our ChatFeed.
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>{
    return chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    )
  }

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessage={messages[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-receipts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  // renderMessages();
  //We are going to render our title to that we can say {chat ?. title}
  //We need to have a check right before as well. (!) means theres no chat
  //Then use dynamic logic and we're going to map all the people so we get the specifi person and then what we
  // want to return is going to be a template string ``
  // Finally inside of there we'll render our last and third component called <MessageForm/>
  if (!chat) return <div />;
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: "100px" }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;

// rafce
