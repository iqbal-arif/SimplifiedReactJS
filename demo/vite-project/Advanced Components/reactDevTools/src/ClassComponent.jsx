import React from "react";
import { DisplayString } from "./DisplayString";

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
      <div>
        <h3>This is a Class Component</h3>

        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((state) => {
              return { age: state.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        <DisplayString name={this.name} age={this.age} />
      </div>
    );
  }
}
