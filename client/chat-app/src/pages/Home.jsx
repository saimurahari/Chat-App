import React,{useState,useEffect} from "react";
import "./css/home.css";
import Robot from '../pages/images/robot.gif';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { allUsersRoute } from "../utils/APIRoutes";
import Contacts from '../components/Contacts';
import { FiPhoneCall } from "react-icons/fi";
import {AiOutlineSend} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';
import Welcome from '../components/welcome';
import ChatContainer from "../components/ChatContainer";
export default function Home() {
  const navigate = useNavigate();
 const [contacts,setContacts] = useState([]);
 const [currentUser, setCurrentUser] = useState(undefined);
 const [currentUserName, setCurrentUserName] = useState(undefined);
 const [currentUserImage, setCurrentUserImage] = useState(undefined);
 const [currentChat, setCurrentChat] = useState(undefined);
 useEffect(() => {
  if (currentUser) {
    setCurrentUserImage(currentUser.avatarImage);
    setCurrentUserName(currentUser.username);
  }
}, [currentUser]);
 useEffect(()=>{
   async function fetchData(){
     if(!localStorage.getItem('chat-app-user')){
       navigate('/login');
     }else{
       setCurrentUser(await JSON.parse(localStorage.getItem('chat-app-user')))
     }
   }
   fetchData();
 },[]);
 
 useEffect(()=>{
   async function fetch(){
     if (currentUser){
       if(currentUser.isAvatarImageSet){
         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
         setContacts(data.data);
 
       }else{
         navigate('/setAvatar');
 
       }
     }
 
   }
   fetch();
 },[currentUser]);
 
 const handleChatChange = (chat)=>{
  setCurrentChat(chat);
 };


  return (
    <>
    <div className="home-container">
      <div className="home-side">
      <Contacts contacts = {contacts} currentUser={currentUser} changeChat = {handleChatChange} />
      </div>
       <div className="home-chat">
       {currentChat === undefined ? (
        <div className='wel-cont'>
        <img src={Robot} alt="Robot" />
        <h1>Welcome, <span>{currentUserName}</span></h1>
        </div>
       ): (
        <ChatContainer currentChat={currentChat} currentUser = {currentUser}/>
       )}

      </div>  

    </div>

    </>
  );
}
