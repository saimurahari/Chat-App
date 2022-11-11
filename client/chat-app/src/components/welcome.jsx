import React from 'react'
import '../pages/css/chat.css';
import Robot from '../pages/images/robot.gif';

export default function welcome({currentUser}) {
  return (
    <div className='wel-cont'>
    <img src={Robot} alt="Robot" />
    <div className='welcome'>
    <h1>welcome, <span>{currentUser.username}</span></h1>
    <h4> Please select a chat to start messaging!</h4>
    </div>
    </div>
  )
}
