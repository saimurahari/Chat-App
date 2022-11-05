import React from "react";
import "./css/home.css";
import { FiPhoneCall } from "react-icons/fi";
import {AiOutlineSend} from 'react-icons/ai';
import {BsFillInfoCircleFill} from 'react-icons/bs';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-side">
        <h2>SChat</h2>
        <hr />
        <div className="contacts">
          <ul>
            <li>Sai Murahari</li>
            <li>Murahari</li>
            <li>Sunil</li>
            <li>Kishore</li>
          </ul>
        </div>
      </div>
      <div className="home-chat">
        <div className="chatting">
          <ul className="nav-chat">
            <li className="person2">
              <a href="#home"><FiPhoneCall /></a>
              <a href="#info"><BsFillInfoCircleFill /></a>
            </li>
            <li className="person">
              <a href="#person">Sai</a>
            </li>
          </ul>
        </div>
        <div className="chat-body">
          <div className="recieve-div">
          <div className="recieve">
            <span>Hii Murahari!</span>
          </div>
          </div>
          <br />
          <br />
          <div className="send-div">
          <div className="send">
            <span>How are you sai?</span>
          </div>
          </div>
          
          
          
        </div>
        <div className="chat-input">
          <form>
            <input type="text"></input>
            <button type="submit">
            <AiOutlineSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
