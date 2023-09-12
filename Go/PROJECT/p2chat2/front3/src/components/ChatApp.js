import {BrowserRouter as Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';
import ChatRoom from './ChatRoom';
import FriendList from './FriendList';
import Profile from './Profile';
import React, { useState } from 'react';
import './Style/static.css'

//起初作为整个chat的启动文件，然后发现route这块配置不好 然后就没有用这个文件了，是用App.js来创建路由
//TODO：还是要学习一下怎么写子路由 即/chat/设置子路由
function ChatApp() {
    // return (
    //
    //         <Routes>
    //             <Route path="/chat" element={<ChatRoom/>} />
    //             <Route path="/friends" element={<FriendList/>} />
    //             <Route path="/profile" element={<Profile/>} />
    //             <Route path="/login" element={<Login/>} />
    //             <Route path="/register" element={<Register/>} />
    //         </Routes>
    //
    // );

}

export default ChatApp;