import React from 'react';

const OutgoingMessage = ({message}) => {
    const {textMessage} = message
    return (
        <div className="outgoing-message">
            <div className="outgoing-message__text">
                <pre>{textMessage}</pre>
            </div>
        </div>
    );
};

export default OutgoingMessage;