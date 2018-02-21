import React from 'react'

import './loadingMessage.css'

class LoadingMessage extends React.Component {
    render() {
        const {message} = this.props

        return (
            <div className='text'>
                {message}
                <span>.</span>
                <span>.</span>
                <span>.</span>
            </div>
        )
    }
}

export default LoadingMessage;
