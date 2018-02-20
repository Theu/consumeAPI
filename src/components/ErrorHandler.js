import React from 'react';

import './errorHandler.css'

class ErrorHandler extends React.Component {
    render() {
        const {failureReason} = this.props

        return (
            <div className='errorHandler-wrapper'>
                <div>We cann not satisfy your request because we got {failureReason}.</div>
                <div className='toggle-alert'
                onClick={this.toggleError}>Got it</div>
            </div>
        )
    }

    toggleError = () => {
        window.location.reload()
    }

}

export default ErrorHandler;
