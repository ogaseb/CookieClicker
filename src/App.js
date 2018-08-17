import React, { Component } from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  IconButton
} from "@material-ui/core";
import CookieClick from "./components/CookieClicker/Cookieclick";
import CookieStatus from "./components/CookieClicker/Cookiestatus";
import CookieUpgrades from "./components/CookieClicker/Cookieupgrades";

import { Autorenew } from "@material-ui/icons";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cookieClicker: {
        totalCookies: 0,
        playerLevel: 1,
        playerToNextLevel: 10, //Nie jestem pewien czy powinienem trzymac takie dane w state
        cookiePerSecond: 0
      },
      upgrades: [
        {
          upgrade: "cursor",
          count: 0,
          multiplier: 0.1,
          price: 15
        },
        {
          upgrade: "grandma",
          count: 0,
          multiplier: 1,
          price: 100
        },
        {
          upgrade: "farm",
          count: 0,
          multiplier: 8,
          price: 1100
        },
        {
          upgrade: "mine",
          count: 0,
          multiplier: 47,
          price: 12000
        },
        {
          upgrade: "factory",
          count: 0,
          multiplier: 260,
          price: 130000
        },
        {
          upgrade: "bank",
          count: 0,
          multiplier: 1400,
          price: 1400000
        },
        {
          upgrade: "temple",
          count: 0,
          multiplier: 7800,
          price: 20000000
        }
      ]
    };

    this.handleReset.bind(this);
  }

  componentDidMount() {
    this.loadProgressFromLocalStorage();
    setInterval(this.saveProgressInLocalStorage, 5000);

    this.interval = setInterval(() => {
      this.handleIncrementTotalCookies(
        this.state.cookieClicker.cookiePerSecond
      );
    }, 1000);
  }

  handleReset = () => {
    const objStatus = {
      totalCookies: 0,
      playerLevel: 1,
      playerToNextLevel: 10,
      cookiePerSecond: 0
    };
    const objUpgrades = [
      {
        upgrade: "mouse",
        count: 0,
        multiplier: 0.1,
        price: 10
      },
      {
        upgrade: "grandma",
        count: 0,
        multiplier: 1,
        price: 100
      },
      {
        upgrade: "farm",
        count: 0,
        multiplier: 8,
        price: 1100
      },
      {
        upgrade: "mine",
        count: 0,
        multiplier: 47,
        price: 12000
      },
      {
        upgrade: "factory",
        count: 0,
        multiplier: 260,
        price: 130000
      },
      {
        upgrade: "bank",
        count: 0,
        multiplier: 1400,
        price: 1400000
      },
      {
        upgrade: "temple",
        count: 0,
        multiplier: 7800,
        price: 20000000
      }
    ];

    this.setState({ cookieClicker: objStatus });
    this.setState({ upgrades: objUpgrades });
    localStorage.removeItem("save");
  };

  saveProgressInLocalStorage = () => {
    const toSaveStatus = this.state.cookieClicker;
    localStorage.setItem("save-status", JSON.stringify(toSaveStatus));
    const toSaveUpgrades = this.state.upgrades;
    localStorage.setItem("save-upgrades", JSON.stringify(toSaveUpgrades));
  };

  loadProgressFromLocalStorage = () => {
    if (localStorage.getItem("save-status") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-status"));
      this.setState({ cookieClicker: obj });
    }
    if (localStorage.getItem("save-upgrades") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-upgrades"));
      this.setState({ upgrades: obj });
    }
  };

  handleIncrementTotalCookies = float => {
    console.log("Increment!", float);
    let obj = Object.assign({}, this.state.cookieClicker);

    obj.totalCookies = this.state.cookieClicker.totalCookies + float;
    if (
      this.state.cookieClicker.totalCookies >=
      this.state.cookieClicker.playerToNextLevel - 1 //ponieważ chcemy zmiany poziomu po uzyskaniu określonej liczby, nie ciastko po
    ) {
      obj.playerLevel = this.state.cookieClicker.playerLevel + 1;
      obj.playerToNextLevel = this.state.cookieClicker.playerToNextLevel * 2;
    }
    this.setState({ cookieClicker: obj });
    // this.placeCookie();
  };

  handleUpgrade = upgradeID => {
    if (
      this.state.upgrades[upgradeID].price >
      this.state.cookieClicker.totalCookies
    ) {
      return;
    }
    console.log("Upgrade!", upgradeID);

    let objStatus = Object.assign({}, this.state.cookieClicker);
    let objUpgrades = Object.assign({}, this.state.upgrades[upgradeID]);

    objStatus.totalCookies =
      this.state.cookieClicker.totalCookies - objUpgrades.price;

    objUpgrades.count = this.state.upgrades[upgradeID].count + 1;

    let price =
      this.state.upgrades[upgradeID].price *
      Math.pow(1.15, this.state.upgrades[upgradeID].count);

    objUpgrades.price = price.toFixed(0);

    this.state.upgrades[upgradeID].count = objUpgrades.count;
    this.state.upgrades[upgradeID].price = objUpgrades.price;

    let cookiePerSecondTemp = this.calculateMultiplier();
    objStatus.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ cookieClicker: objStatus });
    this.forceUpdate();
  };

  calculateMultiplier() {
    let tempSum = 0;
    for (let i = 0; i < this.state.upgrades.length; i++) {
      tempSum +=
        this.state.upgrades[i].count * this.state.upgrades[i].multiplier;
    }
    return tempSum;
  }

  testFunction() {}
  render() {
    return (
      <React.Fragment>
        <AppBar position="static" style={{ backgroundColor: "#1769aa" }}>
          <Toolbar>
            <Typography variant="headline" color="inherit">
              {" "}
              CookieClicker{" "}
            </Typography>
            <IconButton
              onClick={this.handleReset}
              style={{ position: "absolute", right: 0 }}
              aria-haspopup="true"
              color="inherit"
            >
              <Autorenew />
            </IconButton>
          </Toolbar>
        </AppBar>
        <CookieStatus cookies={this.state.cookieClicker} />
        <Grid container>
          <CookieClick onIncrement={this.handleIncrementTotalCookies} />
          <CookieUpgrades
            upgrades={this.state.upgrades}
            onUpgrade={this.handleUpgrade}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
