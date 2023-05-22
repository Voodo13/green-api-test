import React from 'react';

const IncomingMessage = ({message}) => {
    const {textMessage} = message
    return (
        <div className="incoming-message">
            <div className="incoming-message__text">
                <pre>{textMessage}</pre>
            </div>
        </div>
    );
};

export default IncomingMessage;