import React from 'react';
import { Link} from 'react-router-dom';

class LogIn extends React.Component {

    render() {
        return (
            <Link to='todo'>
                <h1>I am a log in</h1>
            </Link>
        )
    }
}

export default LogIn;
