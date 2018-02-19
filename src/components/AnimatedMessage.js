import React from 'react'

import './animatedMessage.css'

class AnimatedMessage extends React.Component {
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

export default AnimatedMessage;
