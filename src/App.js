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
        upgrades: {
          mouse: {
            upgrade: "mouse",
            count: 0,
            multiplier: 0.1,
            price: 10
          },
          grandma: {
            upgrade: "grandma",
            count: 0,
            multiplier: 5,
            price: 200
          }
        },
        achievments: {}
      }
    };

    this.handleReset.bind(this);
  }

  componentDidMount() {
    this.loadProgressFromLocalStorage();
    setInterval(this.saveProgressInLocalStorage, 5000);
  }

  saveProgressInLocalStorage = () => {
    const toSave = this.state.cookieClicker;
    localStorage.setItem("save", JSON.stringify(toSave));
  };

  loadProgressFromLocalStorage = () => {
    if (localStorage.getItem("save") !== null) {
      let obj = JSON.parse(localStorage.getItem("save"));
      this.setState({ cookieClicker: obj });
    }
  };

  handleIncrementTotalCookies = () => {
    console.log("Increment!");

    let obj = {
      totalCookies: this.state.cookieClicker.totalCookies,
      playerLevel: this.state.cookieClicker.playerLevel,
      playerToNextLevel: this.state.cookieClicker.playerToNextLevel
    };

    obj.totalCookies = this.state.cookieClicker.totalCookies + 1;
    if (
      this.state.cookieClicker.totalCookies ===
      this.state.cookieClicker.playerToNextLevel - 1 //ponieważ chcemy zmiany poziomu po uzyskaniu określonej liczby, nie ciastko po
    ) {
      obj.playerLevel = this.state.cookieClicker.playerLevel + 1;
      obj.playerToNextLevel = this.state.cookieClicker.playerToNextLevel * 2;
    }
    this.setState({ cookieClicker: obj });
    this.placeCookie();
  };
  placeCookie = () => {
    const component = document.getElementById("Cookieclick");
    let compWidth = component.offsetWidth - 50;
    let rangeWidth = Math.floor(Math.random() * (compWidth - 0 + 1)) + 0;
    let compHeight = component.offsetWidth - 50;
    let rangeHeight = Math.floor(Math.random() * (compHeight - 100 + 1)) + 0;
    let cookie = document.createElement("IMG");
    cookie.src = require("./gfx/cookie.png");
    cookie.style.position = "absolute";
    cookie.style.left = rangeWidth + "px";
    cookie.style.top = rangeHeight + "px";
    cookie.style.zIndex = 0;
    cookie.style.maxWidth = "16px";

    component.appendChild(cookie);
  };

  handleReset = () => {
    const obj = {
      totalCookies: 0,
      playerLevel: 1,
      playerToNextLevel: 10
    };
    this.setState({ cookieClicker: obj });
    localStorage.removeItem("save");
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
          <CookieUpgrades upgrades={this.state.cookieClicker.upgrades} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
