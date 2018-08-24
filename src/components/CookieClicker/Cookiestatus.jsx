import React, { Component } from "react";
import { Paper, Typography } from "@material-ui/core";
import propTypes from "prop-types";

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
          Cookies:{" "}
          {Math.floor(this.props.cookies.totalCookies).toLocaleString("de-DE")}
        </Typography>
        <Typography align="center" color="inherit">
          Level: {this.props.cookies.playerLevel} | to next:{" "}
          {this.props.statistics.userClickToNextLevel}
        </Typography>
        <Typography align="center" color="inherit">
          CPS:{" "}
          {this.props.cookies.cookiePerSecond
            .toFixed(1)
            .toLocaleString("de-DE")}
        </Typography>
      </Paper>
    );
  }
}

CookeStatus.propTypes = {
  cookies: propTypes.object.isRequired,
  statistics: propTypes.object.isRequired
};
export default CookeStatus;
