import React from 'react';
import Header from "../components/header/Header.jsx";
import Chat from "../components/chat/Chat.jsx";
import AuthService from "../services/authService.js";

const MainPage = ({setPage}) => {
    const authData = AuthService.get()
    return (
        <div className="MainPage">
            <Header setPage={setPage}>
                {authData.phone}
            </Header>
            <Chat authData={authData}/>
        </div>
    );
};

export default MainPage;