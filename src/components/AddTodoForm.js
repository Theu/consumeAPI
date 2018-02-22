import React from 'react';
import PropTypes from 'prop-types';

class AddTodoForm extends React.Component {

  static propTypes = {
    placeholder: PropTypes.string
  };

  render() {
    const {
      placeholder,
      toAddTodo,
      readInsertedTodo
    } = this.props;

    return (
      <div>
        <input
          type='text'
          placeholder={placeholder}
          onChange={readInsertedTodo}
        />
        <input
          type='submit'
          value={placeholder}
          onClick={toAddTodo} />
      </div>
    );
  }
}

export default AddTodoForm;
