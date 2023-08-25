import React from "react";
// import { useState } from "react";

export default class CounterComponentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
    this.state = {
      age: 0,
    };
  }
  render() {
    // Incrementing HandleClickOn Function
    const handleIncrementClick = () => {
      //Decrementing once on each click
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };
    // Decrementing HandleClickOn Function
    const handleDecrementClick = () => {
      //Decrementing once on each click
      this.setState((currentState) => {
        return { age: currentState.age - 1 };
      });
    };
    return (
      <>
        <h1>This is A Counter App</h1>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button onClick={handleDecrementClick}>-</button>
        <span>{this.state.age}</span>
        <button onClick={handleIncrementClick}>+</button>
        <br />
        <br />
        <p>
          My name is <h3>{this.state.name}</h3> and I am{" "}
          <h3>{this.state.age}</h3> years old.
        </p>
      </>
    );
  }
}
