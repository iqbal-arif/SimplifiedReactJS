import React from "react";
export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidUpdate() {
    document.title = this.state.name;
  }

  render() {
    return (
      <>
        <h3>This is a Class Component</h3>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>
        <br />
        <br />
      </>
    );
  }
}
