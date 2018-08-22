import React, { Component } from "react";
import "../node_modules/hacktimer/HackTimer";
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
import status from "./components/CookieClicker/stateModels/statusState";
import statistics from "./components/CookieClicker/stateModels/statisticsState";
import upgrades from "./components/CookieClicker/stateModels/upgradeState";
import achievements from "./components/CookieClicker/stateModels/achievementsState";

class App extends Component {
  constructor() {
    super();
    this.state = {
      status: {},
      upgrades: [],
      achievements: {},
      statistics: {}
    };
  }

  componentWillMount() {
    //najpierw stwórz "model" state z domyślnych wartości
    this.setState({ status: status });
    this.setState({ upgrades: upgrades });
    this.setState({ achievements: achievements });
    this.setState({ statistics: statistics });

    //a następnie nadpisz je zapisaem z Local Storage
    this.loadProgressFromLocalStorage();

    setInterval(this.saveProgressInLocalStorage, 5000);

    let interval = () => {
      this.handleIncrementTotalCookies(this.state.status.cookiePerSecond);
      setTimeout(interval, 1000);
    };
    setTimeout(interval, 1000);

    this.interval = setInterval(() => {
      document.title = Math.floor(this.state.status.totalCookies) + " Cookies";
    }, 2000);
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    this.saveProgressInLocalStorage();
  }

  handleReset = () => {
    this.setState({ status: status });
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

    status.totalCookies = this.state.status.totalCookies + float;

    if (
      this.state.statistics.userClicks >= this.state.status.playerToNextLevel
    ) {
      status.playerLevel = this.state.status.playerLevel + 1;
      status.playerToNextLevel = this.state.status.playerToNextLevel * 2;
    }

    this.setState({ status: status });
  };

  handleCountClicks = number => {
    let stats = Object.assign({}, this.state.statistics);
    stats.userClicks = this.state.statistics.userClicks + 1;
    stats.userCookies = this.state.statistics.userCookies + number;
    stats.userClickToNextLevel = Math.floor(
      this.state.status.playerToNextLevel - this.state.statistics.userClicks
    );
    this.setState({ statistics: stats });
  };

  handleUpgrade = (index, amount) => {
    let price = 0;
    for (let i = 1; i <= amount; i++) {
      price +=
        this.state.upgrades[index].basePrice *
        Math.pow(1.15, this.state.upgrades[index].count + (i - 1));
    }

    if (price > this.state.status.totalCookies) {
      return;
    }

    let objStatus = Object.assign({}, this.state.status);
    let objUpgrades = Object.assign({}, this.state.upgrades);

    objStatus.totalCookies = this.state.status.totalCookies - price;

    objUpgrades[index].count = this.state.upgrades[index].count + amount;

    objUpgrades[index].price = price.toFixed(0);

    let cookiePerSecondTemp = this.calculateMultiplier();
    objStatus.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ status: objStatus });
  };

  handleMultipierUpgrade = index => {
    let objUpgrades = Object.assign({}, this.state.upgrades);
    let objStatus = Object.assign({}, this.state.status);

    if (objUpgrades[index].multiplierUpgrade > this.state.status.totalCookies) {
      return;
    }

    objStatus.totalCookies =
      this.state.status.totalCookies - objUpgrades[index].multiplierUpgrade;

    objUpgrades[index].multiplierUpgrade =
      this.state.upgrades[index].multiplierUpgrade * 10;
    objUpgrades[index].multiplierUpgradeLevel =
      this.state.upgrades[index].multiplierUpgradeLevel + 1;

    objUpgrades[index].multiplier = this.state.upgrades[index].multiplier * 2;

    let cookiePerSecondTemp = this.calculateMultiplier();
    objStatus.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ status: objStatus });
  };

  handleAchievement = (name, id, amount) => {
    let achieve = Object.assign({}, this.state.achievements);
    if (name === 0) {
      achieve[0][0].level = this.state.achievements[0][0].level + 1;
    } else if (name === 1) {
      achieve[1][0].level = this.state.achievements[1][0].level + 1;
      achieve[1][0].criteria = this.state.achievements[1][0].criteria * 100;
    } else if (name === 2) {
      achieve[2][0].level = this.state.achievements[2][0].level + 1;
    } else if (name === 3) {
      achieve[3][0].level = this.state.achievements[3][0].level + 1;
      achieve[3][0].criteria = this.state.achievements[3][0].criteria + 1;
    } else if (name === 4) {
      achieve[4][id].level = this.state.achievements[4][id].level + 1;
      achieve[4][id].criteria =
        this.state.achievements[4][id].criteria + amount;
    } else {
      achieve[name][id].achieve = true;
    }
  };

  handleAchievementBonus = float => {
    let status = Object.assign({}, this.state.status);
    status.quantityPerClick = float + 1;
    this.setState({ status: status });
  };

  calculateMultiplier = () => {
    let tempSum = 0;
    for (let i = 0; i < this.state.upgrades.length; i++) {
      tempSum +=
        this.state.upgrades[i].count * this.state.upgrades[i].multiplier;
    }
    return tempSum;
  };

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
        <CookieStatus
          cookies={this.state.status}
          statistics={this.state.statistics}
        />
        <CookieAchievements
          achievements={this.state.achievements}
          statistics={this.state.statistics}
          status={this.state.status}
          upgrades={this.state.upgrades}
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
            cookies={this.state.status.totalCookies}
            level={this.state.status.playerLevel}
            onUpgrade={this.handleUpgrade}
            onMultiplierUpgrade={this.handleMultipierUpgrade}
          />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
