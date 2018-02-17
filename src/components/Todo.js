import React from 'react';


import './todo.css';

class Todo extends React.Component {

    render() {
        const {
            todoRemove,
            valueButton,
            title,
            id,
            pendingStyle,
            failingButtonStyle
         } = this.props;

        return (
            <div>
                <li className={`todo-wrapper ${pendingStyle}`}>
                    {title}
                    <input
                        className={`todo-button ${failingButtonStyle}`}
                        type='submit'
                        id={id}
                        value={valueButton}
                        onClick={todoRemove} />
                </li>
            </div>
        )
    }
}

export default Todo;
