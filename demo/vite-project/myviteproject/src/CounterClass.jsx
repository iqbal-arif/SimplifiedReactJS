import React from "react";
import { useState } from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "You are Rendering Class Component",
      componentCount: 25,
    };
  }
  render() {
    return <h3></h3>;
  }
}
