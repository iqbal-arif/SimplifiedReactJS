import React from "react";
export class TodoListItemClass extends React.Component {
  render() {
    return (
      <label>
        <input type="checkbox" checked={isComplete} />
        {this.props.children}
      </label>
    );
  }
}
