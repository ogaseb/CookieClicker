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
          id="Cookieclick"
          style={{
            height: this.windowHeight(),
            position: "relative"
          }}
        >
          <Button
            color="primary"
            disableRipple={true}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              width: "100%",
              height: "100%"
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
