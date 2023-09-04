import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };

    this.handleClick = () => {
      console.log(this.state.name);
    };
  }

  //Mounting a Class Component State
  componentDidMount() {
    console.log("Mount");
  }

  //UnMounting a Class Component State
  componentWillUnmount() {
    console.log("Component Un-mounted");
    document.removeEventListener("click", this.handleClick);
  }

  //Updating a Class Component
  componentDidUpdate(prevProps, preState) {
    if (preState.name !== this.state.name) {
      document.removeEventListener("click", this.handleClick);
      document.addEventListener("click", this.handleClick);
    }
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
