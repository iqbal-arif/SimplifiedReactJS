import React from "react";
import { useState } from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
  }
  render() {
    return <h3>{this.state.count}</h3>;
  }
}
