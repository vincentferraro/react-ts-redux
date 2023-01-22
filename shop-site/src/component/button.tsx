import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super.props();
  }
  render(): React.ReactNode {
    return (
      <div>
        <input type="button" />
      </div>
    );
  }
}

export default Button;
