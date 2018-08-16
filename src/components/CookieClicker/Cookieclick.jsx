import React, { Component } from "react";
import { Grid, Paper, Button } from "../../../node_modules/@material-ui/core";

class CookieClick extends Component {
  windowHeight() {
    return document.documentElement.scrollHeight - 100;
  }
  render() {
    return (
      <Grid item xs={6}>
        <div
          style={{
            height: this.windowHeight(),
            position: "relative",
            backgroundColor: "blue"
          }}
        >
          <Button
            color="primary"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)"
            }}
            onClick={this.props.onIncrement}
          >
            Click me!
          </Button>
        </div>
      </Grid>
    );
  }
}

export default CookieClick;
