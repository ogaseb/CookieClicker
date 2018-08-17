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
import { GithubCircle } from "mdi-material-ui";

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
          upgrade: "Cursor",
          gfx: require("./gfx/upgrades/Cursor.png"),
          count: 0,
          multiplier: 0.1,
          basePrice: 15,
          price: 15
        },
        {
          upgrade: "Grandma",
          gfx: require("./gfx/upgrades/Grandmas.gif"),
          count: 0,
          multiplier: 1,
          basePrice: 100,
          price: 100
        },
        {
          upgrade: "Farm",
          gfx: require("./gfx/upgrades/Farm.png"),
          count: 0,
          multiplier: 8,
          basePrice: 1100,
          price: 1100
        },
        {
          upgrade: "Mine",
          gfx: require("./gfx/upgrades/Mine.png"),
          count: 0,
          multiplier: 47,
          basePrice: 12000,
          price: 12000
        },
        {
          upgrade: "Factory",
          gfx: require("./gfx/upgrades/Factory.png"),
          count: 0,
          multiplier: 260,
          basePrice: 130000,
          price: 130000
        },
        {
          upgrade: "Bank",
          gfx: require("./gfx/upgrades/Bank.png"),
          count: 0,
          multiplier: 1400,
          basePrice: 1400000,
          price: 1400000
        },
        {
          upgrade: "Temple",
          gfx: require("./gfx/upgrades/Temple.png"),
          count: 0,
          multiplier: 7800,
          basePrice: 20000000,
          price: 20000000
        },
        {
          upgrade: "Wizard Tower",
          gfx: require("./gfx/upgrades/Wizardtower.png"),
          count: 0,
          multiplier: 44000,
          basePrice: 330000000,
          price: 330000000
        },
        {
          upgrade: "Shipment",
          gfx: require("./gfx/upgrades/Shipment.png"),
          count: 0,
          multiplier: 260000,
          basePrice: 5100000000,
          price: 5100000000
        },
        {
          upgrade: "Alchemy Lab",
          gfx: require("./gfx/upgrades/Alchemylab.png"),
          count: 0,
          multiplier: 1600000,
          basePrice: 75000000000,
          price: 75000000000
        },
        {
          upgrade: "Portal",
          gfx: require("./gfx/upgrades/Portal.png"),
          count: 0,
          multiplier: 10000000,
          basePrice: 100000000000,
          price: 100000000000
        },
        {
          upgrade: "Time Machine",
          gfx: require("./gfx/upgrades/Timemachine.png"),
          count: 0,
          multiplier: 65000000,
          basePrice: 1400000000000,
          price: 1400000000000
        },
        {
          upgrade: "Antimater Condenser",
          gfx: require("./gfx/upgrades/Antim.png"),
          count: 0,
          multiplier: 430000000,
          basePrice: 17000000000000,
          price: 17000000000000
        },
        {
          upgrade: "Prism",
          gfx: require("./gfx/upgrades/Prism.png"),
          count: 0,
          multiplier: 2900000000,
          basePrice: 210000000000000,
          price: 210000000000000
        },
        {
          upgrade: "Chancemaker",
          gfx: require("./gfx/upgrades/Chancemaker.png"),
          count: 0,
          multiplier: 21000000000,
          basePrice: 2600000000000000,
          price: 2600000000000000
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

  componentWillUnmount(){
    this.saveProgressInLocalStorage()
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
        upgrade: "Cursor",
        gfx: require("./gfx/upgrades/Cursor.png"),
        count: 0,
        multiplier: 0.1,
        basePrice: 15,
        price: 15
      },
      {
        upgrade: "Grandma",
        gfx: require("./gfx/upgrades/Grandmas.gif"),
        count: 0,
        multiplier: 1,
        basePrice: 100,
        price: 100
      },
      {
        upgrade: "Farm",
        gfx: require("./gfx/upgrades/Farm.png"),
        count: 0,
        multiplier: 8,
        basePrice: 1100,
        price: 1100
      },
      {
        upgrade: "Mine",
        gfx: require("./gfx/upgrades/Mine.png"),
        count: 0,
        multiplier: 47,
        basePrice: 12000,
        price: 12000
      },
      {
        upgrade: "Factory",
        gfx: require("./gfx/upgrades/Factory.png"),
        count: 0,
        multiplier: 260,
        basePrice: 130000,
        price: 130000
      },
      {
        upgrade: "Bank",
        gfx: require("./gfx/upgrades/Bank.png"),
        count: 0,
        multiplier: 1400,
        basePrice: 1400000,
        price: 1400000
      },
      {
        upgrade: "Temple",
        gfx: require("./gfx/upgrades/Temple.png"),
        count: 0,
        multiplier: 7800,
        basePrice: 20000000,
        price: 20000000
      },
      {
        upgrade: "Wizard Tower",
        gfx: require("./gfx/upgrades/Wizardtower.png"),
        count: 0,
        multiplier: 44000,
        basePrice: 330000000,
        price: 330000000
      },
      {
        upgrade: "Shipment",
        gfx: require("./gfx/upgrades/Shipment.png"),
        count: 0,
        multiplier: 260000,
        basePrice: 5100000000,
        price: 5100000000
      },
      {
        upgrade: "Alchemy Lab",
        gfx: require("./gfx/upgrades/Alchemylab.png"),
        count: 0,
        multiplier: 1600000,
        basePrice: 75000000000,
        price: 75000000000
      },
      {
        upgrade: "Portal",
        gfx: require("./gfx/upgrades/Portal.png"),
        count: 0,
        multiplier: 10000000,
        basePrice: 100000000000,
        price: 100000000000
      },
      {
        upgrade: "Time Machine",
        gfx: require("./gfx/upgrades/Timemachine.png"),
        count: 0,
        multiplier: 65000000,
        basePrice: 1400000000000,
        price: 1400000000000
      },
      {
        upgrade: "Antimater Condenser",
        gfx: require("./gfx/upgrades/Antim.png"),
        count: 0,
        multiplier: 430000000,
        basePrice: 17000000000000,
        price: 17000000000000
      },
      {
        upgrade: "Prism",
        gfx: require("./gfx/upgrades/Prism.png"),
        count: 0,
        multiplier: 2900000000,
        basePrice: 210000000000000,
        price: 210000000000000
      },
      {
        upgrade: "Chancemaker",
        gfx: require("./gfx/upgrades/Chancemaker.png"),
        count: 0,
        multiplier: 21000000000,
        basePrice: 2600000000000000,
        price: 2600000000000000
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
      this.state.upgrades[upgradeID].basePrice *
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
              href="https://github.com/ProPanek/CookieClicker"
              target="_blank"
              style={{ position: "absolute", right: 50 }}
              aria-haspopup="true"
              color="inherit"
            >
              <GithubCircle />
            </IconButton>
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
            level={this.state.cookieClicker.playerLevel}
            onUpgrade={this.handleUpgrade}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
