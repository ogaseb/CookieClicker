import React, { Component } from "react";
import { Grid, Paper, Typography, Button } from "@material-ui/core";

import propTypes from "prop-types";
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
    return this.props.cookies < price;
  };

  multiplierButtonCheck = index => {
    let obj = {
      count: [1, 5, 25, 50, 100, 150, 200, 250, 300, 350, 400],
      multiplierUpgradeLevel: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    for (let i = 0; i < obj.count.length; i++) {
      if (
        this.props.upgrades[index].count >= obj.count[i] &&
        this.props.upgrades[index].multiplierUpgradeLevel ===
          obj.multiplierUpgradeLevel[i]
      ) {
        return false;
      }
    }
    return true;
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

CookieUpgrades.propTypes = {
  upgrades: propTypes.array.isRequired,
  cookies: propTypes.number,
  level: propTypes.number,
  onUpgrade: propTypes.func,
  onMultiplierUpgrade: propTypes.func
};
export default CookieUpgrades;
