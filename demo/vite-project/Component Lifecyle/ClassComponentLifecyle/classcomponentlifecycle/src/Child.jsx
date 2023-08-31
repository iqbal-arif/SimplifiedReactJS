import React from "react";

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    return (
      <div>
        <input></input>
      </div>
    );
  }
}
