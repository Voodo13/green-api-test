import React from 'react';
import './App.scss'
import MainPage from "./pages/MainPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import {useState} from "react";
import AuthService from "./services/authService.js";


function App() {
    const [page, setPage] = useState(AuthService.get() ? 'mainPage' : 'authPage')

    const pages = {
        'authPage': <AuthPage setPage={setPage}/>,
        'mainPage': <MainPage setPage={setPage}/>
    }

    return (<div className="App">
        {pages[page]}
    </div>)
}

export default App
