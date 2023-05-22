import React from 'react';
import {useState} from "react";
import AuthService from "../services/authService.js";

const AuthPage = ({setPage}) => {
    const [error, setError] = useState('')
    const [authData, setAuthData] = useState(
        AuthService.get() ||
        {idInstance: '', apiTokenInstance: '', phone: ''}
    )

    const onChange = (e) => {
        const field = e.target.name
        const newAuthData = {
            ...authData,
            [field]: e.target.value
        }
        setAuthData(newAuthData)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (
            authData.idInstance === ''
            || authData.apiTokenInstance === ''
            || authData.phone === ''
        ) {
            setError('Поля не должны быть пустыми.')
            return
        }
        AuthService.set(authData)
        setPage('mainPage')
    }

    return (
        <div className="auth-page" onSubmit={onSubmit}>
            <form action="#" method="POST" className="auth-form">
                <label htmlFor="idInstance">idInstance:</label>
                <input
                    type="text"
                    name="idInstance"
                    value={authData?.idInstance}
                    onChange={onChange}/>
                <label htmlFor="apiTokenInstance">apiTokenInstance:</label>
                <input
                    type="text"
                    name="apiTokenInstance"
                    value={authData?.apiTokenInstance}
                    onChange={onChange}/>
                <label htmlFor="phone">Номер телефона собеседника:</label>
                <input
                    type="tel"
                    name="phone"
                    value={authData?.phone}
                    onChange={onChange}/>
                <input type="submit" className="button" value="Войти"/>
                <pre style={{color: '#BF616A'}}>
                    {error}
                </pre>
            </form>
        </div>
    );
};

export default AuthPage;