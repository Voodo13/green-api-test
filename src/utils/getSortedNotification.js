const getOutgoingTextMessage = (message) => {
    return {
        type: 'outgoingTextMessage',
        idMessage: message.idMessage,
        chatId: message.senderData.chatId,
        textMessage: message.messageData.textMessageData.textMessage
    }
}

const getIncomingTextMessage = (message) => {
    return {
        type: 'incomingTextMessage',
        idMessage: message.idMessage,
        chatId: message.senderData.chatId,
        textMessage: message.messageData.textMessageData.textMessage
    }
}

const getSortedNotification = (message) => {
    const typeWebhook = message.typeWebhook
    const typeMessage = message.messageData?.typeMessage

    if (typeWebhook === 'outgoingMessageReceived') {
        if (typeMessage === 'textMessage') {
            console.log('OK!')
            console.log(getOutgoingTextMessage(message))
            return getOutgoingTextMessage(message)
        }
    }
    if (typeWebhook === 'incomingMessageReceived') {
        if (typeMessage === 'textMessage') {
            return getIncomingTextMessage(message)
        }
    }
    return null
}

export default getSortedNotification
