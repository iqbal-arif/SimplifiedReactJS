import React from "react";
// import { useState } from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  render() {
    const handleClick = () => {
      //Incrementing once on each click
      this.setState((currentCount) => {
        return { count: currentCount.count + 1 };
      });
      //incrementing once again on or after previous click
      this.setState((currentCount) => {
        return { count: currentCount.count + 1 };
      });
    };
    return <h3 onClick={handleClick}>{this.state.count}</h3>;
  }
}
