import React from 'react';

import './errorHandler.css'

class ErrorHandler extends React.Component {
    render() {
        const {
            faillureReason
        } = this.props

        return (
            <div className='errorHandler-wrapper'>
                <div>We can't satisfy your request because we got {faillureReason}.</div>
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
