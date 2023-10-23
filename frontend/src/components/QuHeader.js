import React from 'react'
import HomeIcon from '@material-ui/icons/Home'
import FeaturedPlayListOutlinedIcon from '@material-ui/icons/FeaturedPlayListOutlined'
import {Search, AssignmentTurnedInOutlined, PeopleAltOutlined, NotificationsOutlined, ExpandMore} from '@material-ui/icons'
import { Avatar , Button, Input } from '@material-ui/core';
import "./css/QuHeader.css"; 
import { useState } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import 'react-responsive-modal/styles.css';
import { Modal } from "react-responsive-modal";
import axios from 'axios';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { logout, selectUser } from '../feature/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function QuHeader() {
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [inputUrl, setInputUrl] = useState("");
    const [question, setQuestion] = useState("")
    const Close = <CloseIcon />;
    const dispatch = useDispatch();
    const user=useSelector(selectUser)

    const handleSubmit= async()=>{
        if(question!=="") {

            const config={
                headers:{
                    "Content-Type":"application/json",
                },
            };

            const body ={
                questionName:question,
                questionUrl:inputUrl,
                user:user
            };
            await axios.post('/api/questions',body,config).then((res)=>{
                console.log(res.data);
                alert(res.data.message);
                window.location.href = "/";
            }).catch((e)=>{
                console.log(e);
                alert("Error in adding question");
            });
        }
    }

    const handleLogout = () => {
        if (window.confirm("Are you sure to logout ?")) {
          signOut(auth)
            .then(() => {
              dispatch(logout());
              console.log("Logged out");
            })
            .catch(() => {
              console.log("error in logout");
            });
        }
      };

  return (
    <div className ="qHeader">
        <h1>QueryQuencher</h1>
        <div className="qHeader-content">
            {/* <div className="qHeader__logo">
                <img src = 'https://png.pngtree.com/png-vector/20230624/ourmid/pngtree-vedantu-asquries-doubt-solving-app-instasolv-vector-png-image_7320969.png' alt ='logo'/>
            </div>     */}
                <div className="qHeader__icons">
                    <div className="qHeader__icon"><HomeIcon/></div>
                    <div className="qHeader__icon"><FeaturedPlayListOutlinedIcon/></div>
                    <div className="qHeader__icon"><AssignmentTurnedInOutlined/></div>
                    <div className="qHeader__icon"><PeopleAltOutlined/></div>
                    <div className="qHeader__icon"><NotificationsOutlined/></div>
                </div>
                <div className="qHeader__input">
                    <Search />
                    <input type="text" placeholder="Search Questions"/>
                </div>
                <div className='qHeader__Rem'>
                   <span onClick={handleLogout}> <Avatar src={user.photo} /> </span> 
                <Button onClick = {() => setIsModalOpen(true)}>Add Question</Button>
                <Modal open={isModalOpen} 
                        closeIcon={Close} 
                        onClose={()=>setIsModalOpen(false)} 
                        closeOnEsc
                        center
                        closeOnOverlayClick={false}
                        styles={{
                            overlay: {
                            height: "auto",
                            },
                        }}
                        >
                    <div className="modal__title">
                        <hs>Add Question</hs>
                        <h5>Share Link</h5>
                    </div>
                    <div className="modal__info">
                        <Avatar src={user.photo} className='avatar' />
                        <div className="modal__scope">
                            <PeopleAltOutlined />
                            <p>Public</p>
                            <ExpandMore />
                        </div>
                    </div>
                    <div className='modal__Field'>
                        <Input 
                            value={question}
                            onChange={(e)=>setQuestion(e.target.value)}
                            type='text' placeholder='start your question' />
                        <div style={{
                            display:"flex",
                            flexDirection:"column"
                        }}>
                            <input type='text'
                            value={inputUrl}
                            onChange = {(e)=> setInputUrl(e.target.value)}
                            style={{
                                margin:"5px 0px",
                                border:"1px solid lightgray",
                                padding:"10px",
                                outline:"2px solid #000"
                            }} 
                            placeholder='include link' />
                            {
                                inputUrl !== "" && (<img style={{
                                    height:"40vh",
                                    objectFit:"contain",
                                }} src={inputUrl} alt="dispimage"/>
                            )}
                        </div>
                    </div>
                    <div className='modal__buttons'>
                        <button className='cancle' onClick={() => setIsModalOpen(false)}>
                            Cancel
                        </button>
                        <button onClick={handleSubmit} type="submit" className="add">
                            Add Question
                        </button>
                    </div>
                </Modal>
            </div>    
        </div>
    </div>
  );
}

export default QuHeader