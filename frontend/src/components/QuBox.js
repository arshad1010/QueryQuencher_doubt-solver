import { Avatar } from '@material-ui/core';
import React from 'react'
import "./css/QuBox.css";
import { useSelector } from "react-redux";
import { selectUser } from '../feature/userSlice';

function QuBox() {
  const user = useSelector(selectUser)
  return (
    <div className="quoraBox">
        <div classname="quoraBox__info">
            <Avatar src={user.photo}/>
        </div>
        <div className="quoraBox__quora">
            <p> What is your Question ?</p>
        </div>
    </div>
  );
}

export default QuBox;