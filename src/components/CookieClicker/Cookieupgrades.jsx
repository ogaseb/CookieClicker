import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button
} from "../../../node_modules/@material-ui/core";

import "./Cookieupgrades.css";
class CookieUpgrades extends Component {
  componentDidMount() {
    console.log(this.props.upgrades);
  }
  windowHeight() {
    return document.documentElement.scrollHeight - 100;
  }
  countPrice = (index, amount) => {
    let price = 0;

    for (let i = 1; i <= amount; i++) {
      price +=
        this.props.upgrades[index].basePrice *
        Math.pow(1.15, this.props.upgrades[index].count + (i - 1));
    }

    return this.nFormatter(price.toFixed(0), 3);
  };

  nFormatter(num, digits) {
    //https://stackoverflow.com/questions/9461621/how-to-format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900-in-javascrip
    var si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "k" },
      { value: 1e6, symbol: "Mil" },
      { value: 1e9, symbol: "Bil" },
      { value: 1e12, symbol: "Tri" },
      { value: 1e15, symbol: "Quad" },
      { value: 1e18, symbol: "Quin" },
      { value: 1e21, symbol: "Sext" },
      { value: 1e24, symbol: "Sept" },
      { value: 1e27, symbol: "Oct" },
      { value: 1e30, symbol: "Non" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  }

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
              <Typography align="center">
                Ilość posiadanych: {content.count}
              </Typography>
              <Typography align="center">
                Mnożnik: {content.multiplier}
              </Typography>
              <Typography align="center" style={{ paddingBottom: "10px" }}>
                Koszt
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
                  {this.countPrice(index, 1)}{" "}
                </Typography>{" "}
                <Typography style={{ flex: "1", fontSize: "12px" }}>
                  {this.countPrice(index, 10)}{" "}
                </Typography>{" "}
                <Typography style={{ flex: "1", fontSize: "12px" }}>
                  {this.countPrice(index, 100)}{" "}
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
                  variant="contained"
                  color="primary"
                  style={{ flex: "1" }}
                  onClick={() => this.props.onUpgrade(index, 1)}
                >
                  Kup
                </Button>
                <Button
                  variant="contained"
                  style={{ flex: "1" }}
                  color="inherit"
                  onClick={() => this.props.onUpgrade(index, 10)}
                >
                  x10
                </Button>
                <Button
                  variant="contained"
                  style={{ flex: "1" }}
                  color="inherit"
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
