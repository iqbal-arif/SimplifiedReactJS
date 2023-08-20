import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "You are Rendering Class Component",
      componentCount: 25,
    };
  }
  render() {
    //Defining onClick as a separate function
    /*
    const handleClick = () =>{
        this.setState({ name: "Modifying AppClass State" })
    }*/
    // replace the inline arrow function with onClick={handleClick}

    return (
      //Defining onClick arrow function as a line function.
      <h1
        onClick={() =>
          this.setState(
            { name: "Modifying AppClass State" },
            { componentCount }
          )
        }
      >
        Hello {this.state.name}
      </h1>
    );
  }
}
