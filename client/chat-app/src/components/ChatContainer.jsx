import React,{useState,useEffect,useRef} from "react";
import ChatInput from "./ChatInput";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineSend } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import axios from 'axios';
import { getAllMessageRoute, sendMessageRoute } from "../utils/APIRoutes";
import '../pages/css/chatbody.css';
export default function ChatContainer({currentChat,currentUser,socket}) {
  const [messages,setMessages] = useState([]);
  const [arrivalMessage,setArrivalMessage] = useState(null);
  const scrollRef = useRef();
  useEffect(()=>{
    async function fetchdata(){
      if(currentChat){
      const response = await axios.post(getAllMessageRoute,{
        from:currentUser._id,
        to:currentChat._id,
      });
      setMessages(response.data);
    }
  }
    fetchdata();
  },[currentChat])
    const handleSendMsg = async(msg)=>{
      await axios.post(sendMessageRoute,{
        from:currentUser._id,
        to:currentChat._id,
        message:msg,
      });
      socket.current.emit("send-msg",{
        to:currentChat._id,
        from:currentUser._id,
        message:msg,
      });
      const msgs = [...messages];
      msgs.push({fromSelf:true,message:msg});
      setMessages(msgs);
    };
    useEffect(()=>{
      if(socket.current){
        socket.current.on("msg-recieve",(msg)=>{

          setArrivalMessage({
            fromSelf:false,
            message:msg
          });
        });
      }
    },[]);

    useEffect(()=>{
      arrivalMessage && setMessages((prev)=>[...prev,arrivalMessage]);
    },[arrivalMessage]);

    useEffect(()=>{
      scrollRef.current?.scrollIntoView({behaviour:"smooth"});

    },[messages]);
  return (
    <div className="d">
      {
        currentChat && (

        <div className="chat-cont">
          <div className="user-details">
          <div className="av-us">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                alt="avatar"
              />
            </div>
            <div className="username">
              <h3>{currentChat.username}</h3>
            </div>
            <div className="con">
              <h3>{<FiPhoneCall/>}</h3>
              <h3>{<BsFillInfoCircleFill />}</h3>
            </div>
            </div>
            <div className="chat-messages">
            {
              messages.map(message=>{
                return(
                  <div >
                    <div className={`message ${message.fromSelf ? "sended":"recieved"}`}
                    
                    >

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
            </div>
            
          </div>
          <div className="in">
            <ChatInput handleSendMsg = {handleSendMsg} />
            </div>
        </div>
        
      )}
    </div>
  );
}
