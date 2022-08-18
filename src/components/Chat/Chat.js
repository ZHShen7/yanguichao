import { useState,useEffect } from 'react'
import { useLocation } from 'react-router';
import React from 'react'
import './chat.css'
import socket from '../../models/socket';


export default function Chat() {
    const [memberNumber] = useState(0);
    const {state:{username}} = useLocation();
    const [userList,setUserList] = useState([]);
    useEffect(() => {
        socket.on('userList',(data) => {
            console.log(data);
        
            setUserList(data);
        },[]);
        console.log(username);
        // setMemberNumber(memberNumber+1);
    }) //eslint-disable-line
    return (
        <div className='container'>
            <div className='side-bar'>
                <h1>用户列表</h1>
                <ul>
                {
                    userList.map((item) => {
                        return <li>{item}</li>
                    })
                }
                </ul>
            </div>
            <div>
                <div className='header'>聊天室({memberNumber})</div>
                <div className='content'>Content</div>
                <div className='input'>input</div>
            </div>
        </div>
    )
}
