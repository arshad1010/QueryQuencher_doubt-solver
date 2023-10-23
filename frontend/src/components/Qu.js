import React from 'react'
import QuHeader from './QuHeader'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widget from './Widget'
import './css/Qu.css';

function Qu() {
  return (
    <div>
        <QuHeader/>
        <div className="quora__contents">
            <div className="quora__content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    </div>
  )
}

export default Qu