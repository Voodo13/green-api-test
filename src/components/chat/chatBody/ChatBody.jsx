import {useEffect, useRef, useState} from 'react'
import useFetchMessage from "../../../hooks/useFetchMessage.js";
import getMessageComponent from "../../../utils/getMessageComponent.jsx";


function ChatBody({messages, ...props}) {
    // прокрутка в конец списка сообщений при каждом обновлении messages
    const chatBody = useRef(null)
    useEffect(() => {
        chatBody.current.scrollTop = chatBody.current.scrollHeight
    }, [messages])

    return (
        <div className="chat__body" ref={chatBody}>
            {messages.map(getMessageComponent)}
        </div>
    )
}

export default ChatBody
