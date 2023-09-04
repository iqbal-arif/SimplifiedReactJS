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
    //1. `console.log` the text **Render** each time the component re-renders. Doing her to make sure it pops up on Mount.
    console.log("Renders");
    //2. `console.log` the text **Hi** when the component mounts
    console.log("Hi");
  }

  componentDidUpdate(preProps, prevState) {
    //1. `console.log` the text **Render** each time the component re-renders
    console.log("Renders");
    //3. `console.log` the text **My name is {name} and I am {age} years old** whenever the `name` or `age` changes
    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old.`
      );
    }
    //4. Update the `document.title` to be equal to `name` whenever the `name` changes
    if (prevState.name !== this.state.name) {
      document.title = this.state.name;
    }
    //Bonus
    //2. Create a timeout that `console.log`s the text **My name is {name}** only after there has been a 1 second delay since the last time the name was changed
    const timeOut = setTimeout(() => {
      console.log(`My name is ${this.state.name}`);
    }, 1000);
    //The followin return =()functions allows a log delay and once the key is stopped it displays that portion of input. Otherwise user typing shows on the screen, but does not log to console until next delay
    return () => {
      clearTimeout(timeOut);
    };
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
