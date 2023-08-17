import React from "react";
export class TodoListClass extends React.Component {
  render() {
    return (
      <ul>
        <li>{this.props.name}</li>
        <li>item2</li>
        <li>item3</li>
        <li>item4</li>
        <li>item5</li>
      </ul>
    );
  }
}
