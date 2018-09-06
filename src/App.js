import React, { Component } from "react";
import {Helmet} from "react-helmet";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import CookieClick from "./components/CookieClicker/Cookieclick";
import CookieStatus from "./components/CookieClicker/Cookiestatus";
import CookieUpgrades from "./components/CookieClicker/Cookieupgrades";
import CookieAchievements from "./components/CookieClicker/Cookieachievements";

import Autorenew from "@material-ui/icons/Autorenew";
import GithubCircle  from "mdi-material-ui/GithubCircle";

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

  UNSAFE_componentWillMount() {
    //najpierw stwórz "model" state z domyślnych wartości
    this.setState({ status, upgrades, achievements, statistics});

    //a następnie nadpisz je zapisaem z Local Storage
    this.loadProgressFromLocalStorage();


    this.progress = setInterval(() => {
      this.saveProgressInLocalStorage
    }, 5000);

    this.CPSinterval = setInterval(() => {
      const { cookiePerSecond } = this.state.status;
      this.handleIncrementTotalCookies(cookiePerSecond);
    }, 1000);


  }

  componentWillUnmount() {
    this.saveProgressInLocalStorage();
  }

  handleReset = () => {
    this.setState({ status, upgrades, achievements, statistics});

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

  handleIncrementTotalCookies = (float = 0) => {
    let status = { ...this.state.status };

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
    let stats = { ...this.state.statistics };
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

    let objStatus = { ...this.state.status };
    let objUpgrades = { ...this.state.upgrades };

    objStatus.totalCookies = this.state.status.totalCookies - price;

    objUpgrades[index].count = this.state.upgrades[index].count + amount;

    objUpgrades[index].price = price.toFixed(0);

    let cookiePerSecondTemp = this.calculateMultiplier();
    objStatus.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ status: objStatus });
  };

  handleMultipierUpgrade = index => {
    let status = { ...this.state.status };
    let upgrades = { ...this.state.upgrades };

    if (upgrades[index].multiplierUpgrade > this.state.status.totalCookies) {
      return;
    }

    status.totalCookies =
      this.state.status.totalCookies - upgrades[index].multiplierUpgrade;

    upgrades[index].multiplierUpgrade =
      this.state.upgrades[index].multiplierUpgrade * 10;
    upgrades[index].multiplierUpgradeLevel =
      this.state.upgrades[index].multiplierUpgradeLevel + 1;

    upgrades[index].multiplier = this.state.upgrades[index].multiplier * 2;

    let cookiePerSecondTemp = this.calculateMultiplier();
    status.cookiePerSecond = cookiePerSecondTemp;

    this.setState({ status: status });
  };

  handleAchievement = (name, id, amount) => {
    let achieve = { ...this.state.achievements };

    if (name === 0) {
      achieve[0].level = this.state.achievements[0].level + 1;
    } else if (name === 1) {
      achieve[1].level = this.state.achievements[1].level + 1;
      achieve[1].criteria = this.state.achievements[1].criteria * 100;
    } else if (name === 2) {
      achieve[2].level = this.state.achievements[2].level + 1;
    } else if (name === 3) {
      achieve[3].level = this.state.achievements[3].level + 1;
      achieve[3].criteria = this.state.achievements[3].criteria + 1;
    } else if (name === 4) {
      achieve[4][id].level = this.state.achievements[4][id].level + 1;
      achieve[4][id].criteria =
        this.state.achievements[4][id].criteria + amount;
    } else {
      achieve[name][id].achieve = true;
    }
  };

  handleAchievementBonus = float => {
    let status = { ...this.state.status };

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
    const {  status, statistics, upgrades, achievements} = this.state
    return (
      <React.Fragment>
        <Helmet>
        </Helmet>
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
          status={status}
          statistics={statistics}
        />
        <CookieAchievements
          achievements={achievements}
          statistics={statistics}
          status={status}
          upgrades={upgrades}
          onAchievement={this.handleAchievement}
          onAchievementBonus={this.handleAchievementBonus}
        />

        <Grid container>
          <CookieClick
            cps={this.state.status.cookiePerSecond}
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
