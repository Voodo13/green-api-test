import OutgoingMessage from "../components/chat/chatBody/OutgoingMessage.jsx";
import IncomingMessage from "../components/chat/chatBody/IncomingMessage.jsx";
import ErrorMessage from "../components/chat/chatBody/ErrorMessage.jsx";

const getMessageComponent = (message) => {
    if (message.type === 'incomingTextMessage') {
        return (<IncomingMessage key={message.idMessage} message={message}/>)
    }
    if (message.type === 'outgoingTextMessage') {
        return (<OutgoingMessage key={message.idMessage} message={message}/>)
    }
    if (message.type === 'errorTextMessage') {
        return (<ErrorMessage key={message.idMessage} message={message}/>)
    }
    return null
}

export default getMessageComponent