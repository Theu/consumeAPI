import React from 'react';

import './todo.css';

class Todo extends React.Component {

    render() {
        const {
            removeTodo,
            valueButton,
            title,
            id
         } = this.props;

        return (
            <div>
                <li className={`todo-wrapper`}>
                    {title}
                    <input
                        className={`todo-button`}
                        type='submit'
                        id={id}
                        value={valueButton}
                        onClick={removeTodo} />
                </li>
            </div>
        )
    }
}


export default Todo;
