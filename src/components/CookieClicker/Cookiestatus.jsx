import React, { Component } from "react";
import { Paper, Typography } from "../../../node_modules/@material-ui/core";
class CookeStatus extends Component {
  render() {
    return (
      <Paper
        id="Cookiestatus"
        square={true}
        style={{
          padding: "15px",
          position: "absolute",
          top: "25%",
          left: "25%",
          transform: "translate(-50%, -50%)"
          // backgroundColor: "#1769aa"
        }}
        color="inherit"
      >
        <Typography align="center" color="inherit">
          Ilość ciasteczek: {this.props.cookies.totalCookies.toFixed(0)}
        </Typography>
        <Typography align="center" color="inherit">
          Twój poziom: {this.props.cookies.playerLevel} |{" "}
          {this.props.statistics.userClickToNextLevel}
        </Typography>
        <Typography align="center" color="inherit">
          cps: {this.props.cookies.cookiePerSecond.toFixed(1)}
        </Typography>
      </Paper>
    );
  }
}

export default CookeStatus;
