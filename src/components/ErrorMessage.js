import React from 'react';

export default class ErrorMessage extends React.Component {
    render() {
        const {errorMessage} = this.props

        return(
            <h1>{errorMessage}</h1>
        )
    }
}
