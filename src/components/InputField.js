import React from 'react';
import PropTypes from 'prop-types';

class AdderField extends React.Component {

    static propTypes = {
        placeholder: PropTypes.string,
        onTitleChange: PropTypes.func,
        handleClick: PropTypes.func
    }

    render() {
        const {
            placeholder,
            onTitleChange,
            handleClick
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
                    value={placeholder}
                    onClick={handleClick} />
            </div>
        );
    }
    clear = () => {
        this.input.value = '';
    }
}

export default AdderField;
