import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age + 1,
              };
            })
          }
        >
          +
        </button>
        <span>{this.state.age}</span>
        <button
          onClick={() =>
            this.setState((currentState) => {
              return {
                age: currentState.age - 1,
              };
            })
          }
        >
          -
        </button>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </div>
    );
  }
}
