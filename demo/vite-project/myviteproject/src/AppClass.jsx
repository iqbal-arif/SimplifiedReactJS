import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "You are Rendering Class Component",
    };
  }
  render() {
    return <h1>Hello {this.state.name}</h1>;
  }
}
