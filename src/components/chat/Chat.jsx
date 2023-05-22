import React, {useEffect, useMemo, useState} from 'react';
import ChatBody from "./chatBody/ChatBody.jsx";
import ChatSender from "./ChatSender.jsx";
import MessageService from "../../services/green-api/messageService.js";
import useFetchMessage from "../../hooks/useFetchMessage.js";
import getSortedNotification from "../../utils/getSortedNotification.js";

const Chat = ({authData}) => {
    const [messages, setMessages] = useState([])
    const service = useMemo(() => new MessageService(authData), [authData])
    const {message, isLoading} = useFetchMessage(service)

    useEffect(() => {
        if (isLoading) return
        const sortedMessage = getSortedNotification(message)
        if (!sortedMessage) return
        setMessages([...messages, sortedMessage])
    }, [isLoading])

    return (
        <div className="chat">
            <ChatBody messages={messages}/>
            <ChatSender service={service} messages={messages} setMessages={setMessages}/>
        </div>
    );
};

export default Chat;