import React, { Component } from "react";
import Button from "@material-ui/core/Button";
export default class Buttonlist extends Component {
  render() {
    return (
      <Button
        style={{ backgroundColor: "#272727", color: "white" }}
        variant="contained"
      >
        {this.props.children}
      </Button>
    );
  }
}
