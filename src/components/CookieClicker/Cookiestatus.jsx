import React, { Component } from "react";
import { Paper, Typography } from "../../../node_modules/@material-ui/core";

class CookeStatus extends Component {
  render() {
    return (
      <Typography align="center">
        <Paper square={true}>
          Ilość ciasteczek: {this.props.cookies.totalCookies} Twój poziom:{" "}
          {this.props.cookies.playerLevel}
        </Paper>
      </Typography>
    );
  }
}

export default CookeStatus;
