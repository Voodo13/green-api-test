import React, {useState} from 'react';

const ChatSender = ({service, messages, setMessages}) => {
    const [isSending, setIsSending] = useState(false)

    const formHandler = async (e) => {
        e.preventDefault()
        if (e.target.textMessage.value === '') return
        setIsSending(true)
        const message = e.target.textMessage.value
        try {
            const {idMessage} = await service.sendText(message)
            setMessages([...messages, {
                type: 'outgoingTextMessage',
                idMessage,
                chatId: service.chatId,
                textMessage: message
            }])

            e.target.textMessage.value = ''
        } catch (err) {
            console.log('Ошибка при отправке', err.message)
            setMessages([...messages, {
                type: 'errorTextMessage',
                idMessage: new Date().getTime(),
                chatId: service.chatId,
                textMessage: `Ошибка при отправке данных\n\n${err.message}\n\nВозможно вы ввели неверные данные учетной записи или номер собеседника`
            }])
        }
        setIsSending(false)
    }

    return (
        <>
            <form
                action="src/components/chat/ChatSender.jsx#"
                className="chat-sender"
                onSubmit={formHandler}
            >
                <input
                    type="text"
                    name="textMessage"
                    className="chat-sender__input"
                    placeholder="Введите сообщение"
                />
                <input
                    type="submit"
                    className="button chat-sender__button"
                    value="Отправить"
                    disabled={isSending}
                />
            </form>
        </>
    );
};

export default ChatSender;