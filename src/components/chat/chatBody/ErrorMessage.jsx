import React from 'react';

const ErrorMessage = ({message}) => {
    const {textMessage} = message
    return (
        <div className="error-message">
            <div className="error-message__text">
                <pre>{textMessage}</pre>
            </div>
        </div>
    );
};

export default ErrorMessage;