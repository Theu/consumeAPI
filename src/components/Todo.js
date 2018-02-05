import React from 'react';

import './todo.css'

class Todo extends React.Component {

    render() {
        const {
            todoRemove,
            valueButton,
            title,
            id
         } = this.props;

        return (
            <li className='todo-wrapper'>
                {title}
                <input
                    className='todo-button'
                    type='submit'
                    id={id}
                    value={valueButton}
                    onClick={todoRemove} />
            </li>
        )
    }
}

export default Todo;
