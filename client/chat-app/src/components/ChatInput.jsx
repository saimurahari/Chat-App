import React,{useState} from 'react'
import {IoMdSend} from 'react-icons/io';

export default function ChatInput({handleSendMsg}) {
    const [msg,setMsg] = useState("");
    const sendChat = (event)=>{
        event.preventDefault();
        if(msg.length>0){
            handleSendMsg(msg);
            setMsg('');
        }
    }
  return (
    <>
    <div className='chat-input-cont'>
    <form  className='input-cont' onSubmit={(e)=>sendChat(e)}>
        <input 
        type="text"
        placeholder='Type your message here'
        value={msg}
        onChange={(e)=> setMsg(e.target.value)}
         />
        <input type='submit'></input>
    </form>
    </div>
    </>
  )
}
