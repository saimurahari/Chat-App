import React,{useState,useEffect} from "react";
import ChatInput from "./ChatInput";
import Messages from './Messages';
import axios from 'axios';
export default function ChatContainer({currentChat,currentUser}) {
    const handleSendMsg = async(msg)=>{

    };
  return (
    <>
      {
        currentChat && (
        <div className="chat-cont">
          <div className="user-details">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h3>{currentChat.username}</h3>
            </div>
            {/* <div className="chat-messages">
            {
              messages.map(message=>{
                return(
                  <div>
                    <div className={`message ${message.fromSelf ? "sended":"recieved"}`}>

                      <div className="content">
                        <p>
                          {message.message}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
            </div> */}
            <ChatInput handleSendMsg = {handleSendMsg} />
          </div>
        </div>
      )}
    </>
  );
}
