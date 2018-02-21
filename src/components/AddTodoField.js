import React from "react";
import PropTypes from "prop-types";

class AddeTodoField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
  }

  static propTypes = {
    placeholder: PropTypes.string,
    onTitleChange: PropTypes.func,
    handleClick: PropTypes.func
  };

  render() {
    const { placeholder } = this.props;

    return (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={this.readInsertedTodo}
        />
        <input
          type="submit"
          value={placeholder}
          onClick={this.addTodo} />
      </div>
    );
  }

  readInsertedTodo = event => {
    this.setState({ title: event.target.value });
  };

  addTodo = event => {
    if(this.state.title.length > 0) {
      this.props.toAddTodo(this.state.title);
    }
  };
}

export default AddeTodoField;
