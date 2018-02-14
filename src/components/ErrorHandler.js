import React from 'react';

import './ErrorHandler.css'

class ErrorHandler extends React.Component {
    render() {
        const {
            faillureReason,
            toggleError
        } = this.props

        return (
            <div className='errorHandler-wrapper'>
                <div>We can't satisfy your request because we got {faillureReason}.</div>
                <div className='toggle-alert'
                onClick={toggleError}>Got it</div>
            </div>
        )
    }
}

export default ErrorHandler;
