import React from 'react';
import PropTypes from 'prop-types';

class AdderField extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onTitleChange: PropTypes.func,
        addTodo: PropTypes.func
    }

    render() {
        const {
            placeholder,
            onTitleChange,
            addTodo
        } = this.props

        return (
            <div>
                <input
                    ref={input => this.input = input}
                    type='text'
                    placeholder={placeholder}
                    onChange={onTitleChange} />
                <input
                    type='submit'
                    value='add todo'
                    onClick={addTodo} />
            </div>
        );
    }
    clear = () => {
        this.input.value = '';
    }
}

export default AdderField;
