import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';
import "./App.css";

const App = () => {
  return (
    //ChatEngine is a component as you can see it starts with a capital letter.
    //Inside it I passed different props and thats where the magic happens.
    // Based on the props passed, its going to behave differently.
    //Below are the admin credentials, for private use only.
    //Inside the renderChatFeed prop, by doing this I can render my own component for the entire chat application,
    // and in here I get all the props that have something to do with the chat.
    // Finally what are we going to render well we're go to create our own component called 'ChatFeed'
    // and then also spread {...chatAppProps} all the props that are coming from the chat-engine.
    //To spread the props you have to wrap them in curly braces.
    <ChatEngine 
        height='100vh'
        projectID = '8bb78ca3-5215-4f29-bfd2-c926c11f64d4'
        userName = 'Red Pill'
        userSecret = '123123'
        renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
};

export default App;