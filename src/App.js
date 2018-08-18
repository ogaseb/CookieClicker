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
import CookieAchievements from "./components/CookieClicker/Cookieachievements";

import { Autorenew } from "@material-ui/icons";
import { GithubCircle } from "mdi-material-ui";

import "./App.css";
import upgrades from "./components/CookieClicker/upgradeState";
import achievements from "./components/CookieClicker/achievementsState";

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: {
        totalCookies: 0,
        playerLevel: 1,
        playerToNextLevel: 10, //Nie jestem pewien czy powinienem trzymac takie dane w state
        cookiePerSecond: 0,
        quantityPerClick: 1
      },
      upgrades: [],
      achievements: {},
      statistics: {
        userClicks: 0,
        userCookies: 0
      }
    };

    this.handleReset.bind(this);
  }

  componentDidMount() {
    this.setState({ upgrades: upgrades });
    this.setState({ achievements: achievements });

    this.loadProgressFromLocalStorage();
    setInterval(this.saveProgressInLocalStorage, 5000);

    this.interval = setInterval(() => {
      this.handleIncrementTotalCookies(this.state.status.cookiePerSecond);
    }, 1000);
    this.interval = setInterval(() => {
      document.title = this.state.status.totalCookies.toFixed(0) + " Cookies";
    }, 2000);
  }

  componentWillUnmount() {
    this.saveProgressInLocalStorage();
  }

  handleReset = () => {
    const objStatus = {
      totalCookies: 0,
      playerLevel: 1,
      playerToNextLevel: 10,
      cookiePerSecond: 0,
      quantityPerClick: 1
    };
    const statistics = {
      userClicks: 0,
      userCookies: 0
    };

    this.setState({ status: objStatus });
    this.setState({ upgrades: upgrades });
    this.setState({ achievements: achievements });
    this.setState({ statistics: statistics });

    localStorage.removeItem("save-status");
    localStorage.removeItem("save-upgrades");
    localStorage.removeItem("save-achievements");
    localStorage.removeItem("save-statistics");

    window.location.reload();
  };

  saveProgressInLocalStorage = () => {
    const toSaveStatus = this.state.status;
    localStorage.setItem("save-status", JSON.stringify(toSaveStatus));
    const toSaveUpgrades = this.state.upgrades;
    localStorage.setItem("save-upgrades", JSON.stringify(toSaveUpgrades));
    const toSaveAchievements = this.state.achievements;
    localStorage.setItem(
      "save-achievements",
      JSON.stringify(toSaveAchievements)
    );
    const toSaveStatistics = this.state.statistics;
    localStorage.setItem("save-statistics", JSON.stringify(toSaveStatistics));
  };

  loadProgressFromLocalStorage = () => {
    if (localStorage.getItem("save-status") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-status"));
      this.setState({ status: obj });
    }
    if (localStorage.getItem("save-upgrades") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-upgrades"));
      this.setState({ upgrades: obj });
    }
    if (localStorage.getItem("save-achievements") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-achievements"));
      this.setState({ achievements: obj });
    }
    if (localStorage.getItem("save-statistics") !== null) {
      let obj = JSON.parse(localStorage.getItem("save-statistics"));
      this.setState({ statistics: obj });
    }
  };

  handleIncrementTotalCookies = float => {
    let status = Object.assign({}, this.state.status);
    let statistics = Object.assign({}, this.state.statistics);

    status.totalCookies = this.state.status.totalCookies + float;
    statistics.userCookies = this.state.statistics.userCookies + float;

    if (
      this.state.status.totalCookies >=
      this.state.status.playerToNextLevel - 1 //ponieważ chcemy zmiany poziomu po uzyskaniu określonej liczby, nie ciastko po
    ) {
      status.playerLevel = this.state.status.playerLevel + 1;
      status.playerToNextLevel = this.state.status.playerToNextLevel * 2;
    }
    this.setState({ status: status });
    this.setState({ statistics: statistics });
  };

  handleUpgrade = (upgradeID, amount) => {
    let price = 0;
    for (let i = 1; i <= amount; i++) {
      price +=
        this.state.upgrades[upgradeID].basePrice *
        Math.pow(1.15, this.state.upgrades[upgradeID].count + (i - 1));
    }

    if (price > this.state.status.totalCookies) {
      return;
    }

    let objStatus = Object.assign({}, this.state.status);
    let objUpgrades = Object.assign({}, this.state.upgrades);

    objStatus.totalCookies = this.state.status.totalCookies - price;

    objUpgrades[upgradeID].count =
      this.state.upgrades[upgradeID].count + amount;

    objUpgrades[upgradeID].price = price.toFixed(0);

    let cookiePerSecondTemp = this.calculateMultiplier();
    objStatus.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ status: objStatus });
  };

  handleAchievement = (name, id) => {
    let achieve = Object.assign({}, this.state.achievements);
    achieve[name][id].achieve = true;
  };

  handleAchievementBonus = float => {
    console.log(float);
    let status = Object.assign({}, this.state.status);
    status.quantityPerClick = float;
    this.setState({ status: status });
  };

  handleCountClicks = () => {
    let stats = Object.assign({}, this.state.statistics);
    stats.userClicks = this.state.statistics.userClicks + 1;
    this.setState({ statistics: stats });
  };

  calculateMultiplier() {
    let tempSum = 0;
    for (let i = 0; i < this.state.upgrades.length; i++) {
      tempSum +=
        this.state.upgrades[i].count * this.state.upgrades[i].multiplier;
    }
    return tempSum;
  }

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
        <CookieStatus cookies={this.state.status} />
        <CookieAchievements
          achievements={this.state.achievements}
          statistics={this.state.statistics}
          status={this.state.status}
          onAchievement={this.handleAchievement}
          onAchievementBonus={this.handleAchievementBonus}
        />

        <Grid container>
          <CookieClick
            quantityPerClick={this.state.status.quantityPerClick}
            onIncrement={this.handleIncrementTotalCookies}
            countClicks={this.handleCountClicks}
          />
          <CookieUpgrades
            upgrades={this.state.upgrades}
            level={this.state.status.playerLevel}
            onUpgrade={this.handleUpgrade}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
