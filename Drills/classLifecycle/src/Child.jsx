import React from "react";

export class Child extends React.Component {
  constructor() {
    super();
    this.state = {
      age: 0,
      name: "",
    };
  }

  componentDidMount() {
    //2. `console.log` the text **Hi** when the component mounts
    console.log("Hi");
  }

  componentDidUpdate() {
    //1. `console.log` the text **Render** each time the component re-renders
    console.log("Renders");
    //3. `console.log` the text **My name is {name} and I am {age} years old** whenever the `name` or `age` changes
    console.log(
      `My name is ${this.state.name} and I am ${this.state.age} years old.`
    );
    //4. Update the `document.title` to be equal to `name` whenever the `name` changes
    document.title = this.state.name;
  }

  componentWillUnmount() {
    //Bonus
    //1. `console.log` the text **Bye** when the component unmounts

    console.log("Bye");
  }
  render() {
    return (
      <div>
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
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
