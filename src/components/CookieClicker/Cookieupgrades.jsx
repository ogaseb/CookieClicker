import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography
} from "../../../node_modules/@material-ui/core";

class CookieUpgrades extends Component {
  componentDidMount() {
    // console.log(this.props.upgrades);
  }
  render() {
    // const { mouse, grandma } = this.props.upgrades;
    return (
      <Grid item xs={6}>
        <Typography style={{ height: "100%" }}>
          <Paper>Upgrades</Paper>
          {/* {this.props.upgrades.map((upgrades, index) => (
            <Paper>{upgrades.name} </Paper>
          ))} */}
          {/* <Paper>Name: {this.props.upgrades.mouse}</Paper> */}
        </Typography>
      </Grid>
    );
  }
}

export default CookieUpgrades;
