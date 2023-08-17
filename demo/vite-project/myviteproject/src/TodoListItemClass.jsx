import React from "react";
export class TodoListItemClass extends React.Component {
  render() {
    return (
      <label>
        <input
          type="checkbox"
          checked={this.props.isComplete}
          name={this.props.name}
        />
        {this.props.children}
      </label>
    );
  }
}
