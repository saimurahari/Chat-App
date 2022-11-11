import React, { useEffect, useState } from "react";
import axios from "axios";
import './css/avatar.css';
import { Buffer } from "buffer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { setAvatarRoute } from "../utils/APIRoutes";

export default function SetAvatar() {
    const api = 'https://api.multiavatar.com/45678945';
    const navigate = useNavigate();
    const [avatars,setAvatars] = useState([]);
    const [selectedAvatar,setSelectedAvatar] = useState(undefined);

    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
      useEffect(()=>{
        async function fetch(){
            if(!localStorage.getItem('chat-app-user')){
                navigate('/login');

            }
        }
        fetch();
      },[])

      const setProfilePicture = async()=>{
        if(selectedAvatar===undefined){
            toast.error("Please select an Avatar");
        }else{
            const user = await JSON.parse(localStorage.getItem("chat-app-user"));
            const {data} = await axios.post(`${setAvatarRoute}/${user._id}`,{
                image:avatars[selectedAvatar],
            });

            console.log(data);
            if(data.isSet){
                user.isAvatarImageSet = true;
                user.avatarImage = data.image;
                localStorage.setItem('chat-app-user',JSON.stringify(user));
                navigate('/home');
            }else{
                toast.error("Error setting Avatar. Please try again",toastOptions);
            }

        }
      };
      useEffect(()=>{
        async function fetchdata(){
            const data = [];
        for(let i = 0;i<4;i++){
            const image = await axios.get(
                `${api}/${Math.round(Math.random()*1000)}`
            );
            const buffer = new Buffer(image.data);
            data.push(buffer.toString('base64'));

        }
        setAvatars(data);
        }
        fetchdata();
        

      },[]);
  return (
    <div className="avatar-container">
    <div className="title-container">
        <h1>Pick an avatar as your profile picture</h1>

    </div>
    <div className="avatars">
    {avatars.map((avatar,index)=>{
        return(
            <div
            key={index}
            className={`avatar ${selectedAvatar === index ? "selected" : ""
            }`}
            >
                <img src= {`data:image/svg+xml;base64,${avatar}`} alt = "avatar"
                    onClick={()=>setSelectedAvatar(index)}
                />
            </div>
        )
    })}
    
    </div>
    <div className="btn-avatar">
    <button className="submit-btn" onClick={setProfilePicture}>Set as Profile Picture</button>
    </div>
    <ToastContainer />
    </div>
  )
}
