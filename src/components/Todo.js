import React from 'react';
import {connect} from 'react-redux';

import {
    getFailedLoad
} from '../redux/actions/selectors';

import './todo.css';

class Todo extends React.Component {

    render() {
        const {
            todoRemove,
            valueButton,
            title,
            id,
            responseFromServer
         } = this.props;
         const loadingAddedTodo = (responseFromServer === '201')
         const addedTitle = (responseFromServer === '201') ? 'added' : null;
         console.log('TODO RESPONSE', responseFromServer)
        return (
            <div>
                {loadingAddedTodo &&
                    <li className='todo-wrapper'>
                    {addedTitle}
                    <input
                        className='todo-button'
                        type='submit'
                        id={id}
                        value={valueButton}
                        onClick={todoRemove} />
                </li>
                }
                <li className='todo-wrapper'>
                    {title}
                    <input
                        className='todo-button'
                        type='submit'
                        id={id}
                        value={valueButton}
                        onClick={todoRemove} />
                </li>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state);
    return {
        responseFromServer: getFailedLoad(state)
    }
}

export default connect(mapStateToProps)(Todo);
