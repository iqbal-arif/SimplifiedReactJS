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
    const handleClick = () => {
      this.setState((currentCount) => {
        return { componentCount: currentCount.count + 1 };
      });
      this.setState((currentCount) => {
        return { componentCount: currentCount.componentCount + 1 };
      });
    };
    return <h3 onClick={handleClick}>{this.state.count}</h3>;
  }
}
