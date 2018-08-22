import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button
} from "../../../node_modules/@material-ui/core";

import { nFormatter } from "./utils.js";

class CookieUpgrades extends Component {
  countPrice = (index, amount) => {
    let price = 0;

    for (let i = 1; i <= amount; i++) {
      price +=
        this.props.upgrades[index].basePrice *
        Math.pow(1.15, this.props.upgrades[index].count + (i - 1));
    }
    // this.nFormatter(price.toFixed(0), 2);
    return price;
  };
  upgradeButtonCheck = (index, amount) => {
    let price = this.countPrice(index, amount);
    if (this.props.cookies < price) {
      return true;
    } else {
      return false;
    }
  };
  multiplierButtonCheck = index => {
    if (
      this.props.upgrades[index].count >= 1 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 0
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 5 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 1
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 25 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 2
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 50 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 3
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 100 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 4
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 150 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 5
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 200 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 6
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 250 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 7
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 300 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 8
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 350 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 9
    ) {
      return false;
    } else if (
      this.props.upgrades[index].count >= 400 &&
      this.props.upgrades[index].multiplierUpgradeLevel === 10
    ) {
      return false;
    } else return true;
  };

  render() {
    // const { mouse, grandma } = this.props.upgrades;
    return (
      <Grid
        item
        xs={6}
        style={{
          marginTop: 5,
          overflowX: "hidden",
          overflowY: "scroll",
          height: "calc(100vh - 70px)"
        }}
      >
        {this.props.upgrades
          .slice(0, this.props.level)
          .map((content, index) => (
            <Paper key={index}>
              <Typography variant="display1" align="center">
                <img src={content.gfx} alt={content.upgrade} />
              </Typography>
              <Typography variant="display1" align="center">
                {content.upgrade}
              </Typography>
              <Typography align="center">Count: {content.count}</Typography>
              {this.multiplierButtonCheck(index) === false && (
                <Typography align="center">
                  Price of mutliplier upgrade:{" "}
                  {nFormatter(content.multiplierUpgrade, 3)}
                </Typography>
              )}

              <Typography align="center">
                <Button
                  variant="contained"
                  color="inherit"
                  onMouseOver={this.handlePopoverOpen}
                  disabled={this.multiplierButtonCheck(index)}
                  onClick={() => {
                    this.props.onMultiplierUpgrade(index);
                  }}
                >
                  Multiplier: {content.multiplier}
                </Button>
              </Typography>
              <Typography align="center" style={{ paddingBottom: "10px" }}>
                Price
              </Typography>
              <Paper
                square={true}
                classes={{
                  root: "shopPrice" // class name, e.g. `classes-nesting-root-x`
                }}
                align="center"
                style={{
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <Typography style={{ flex: "1", fontSize: "12px" }}>
                  {nFormatter(Math.floor(this.countPrice(index, 1)), 2)}{" "}
                </Typography>{" "}
                <Typography style={{ flex: "1", fontSize: "12px" }}>
                  {nFormatter(Math.floor(this.countPrice(index, 10)), 2)}{" "}
                </Typography>{" "}
                <Typography style={{ flex: "1", fontSize: "12px" }}>
                  {nFormatter(Math.floor(this.countPrice(index, 100)), 2)}{" "}
                </Typography>
              </Paper>
              <Paper
                square={true}
                classes={{
                  root: "shopPrice" // class name, e.g. `classes-nesting-root-x`
                }}
                align="center"
                style={{ width: "100%", display: "flex", flexDirection: "row" }}
              >
                <Button
                  disabled={this.upgradeButtonCheck(index, 1)}
                  variant="contained"
                  color="primary"
                  style={{ flex: "1" }}
                  onClick={() => this.props.onUpgrade(index, 1)}
                >
                  Buy
                </Button>
                <Button
                  disabled={this.upgradeButtonCheck(index, 10)}
                  variant="contained"
                  style={{ flex: "1" }}
                  color="default"
                  onClick={() => this.props.onUpgrade(index, 10)}
                >
                  x10
                </Button>
                <Button
                  disabled={this.upgradeButtonCheck(index, 100)}
                  variant="contained"
                  style={{ flex: "1" }}
                  color="default"
                  onClick={() => this.props.onUpgrade(index, 100)}
                >
                  x100
                </Button>
              </Paper>
            </Paper>
          ))}
      </Grid>
    );
  }
}

export default CookieUpgrades;
