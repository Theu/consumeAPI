import React from 'react';
import PropTypes from 'prop-types';

class TodoList extends React.Component {
    static propTypes = {
        arrayToMap: PropTypes.array,
        todoRemove: PropTypes.func,
        valueButton: PropTypes.string
    }
    render() {
        const {
            arrayToMap,
            todoRemove,
            valueButton
         } = this.props;
        return (
            <div>
                {arrayToMap.map((key, value, id) => {
                    return (
                    <div
                        key={value}>
                        <li>
                        {key.title}
                        </li>
                        <input
                        type='submit'
                        id={key.id}
                        value={valueButton}
                        onClick={todoRemove(key.id)} />
                    </div>
                    )
                })}
            </div>
        )
    }
}




export default TodoList;
