import React, { Component } from "react";
import { Grid, AppBar, Toolbar, Typography } from "@material-ui/core";
import CookieClick from "./components/CookieClicker/Cookieclick";
import CookieStatus from "./components/CookieClicker/Cookiestatus";

import "./App.css";

class App extends Component {
  state = {
    cookieClicker: {
      totalCookies: 0,
      playerLevel: 1,
      playerToNextLevel: 10 //Nie jestem pewien czy powinienem trzymac takie dane w state
    }
  };

  componentDidMount() {
    this.loadProgressFromLocalStorage();
    setInterval(this.saveProgressInLocalStorage, 5000);
  }

  saveProgressInLocalStorage = () => {
    const toSave = this.state.cookieClicker;
    localStorage.setItem("save", JSON.stringify(toSave));
  };

  loadProgressFromLocalStorage = () => {
    console.log("loading stats");

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
          </Toolbar>
        </AppBar>
        <CookieStatus cookies={this.state.cookieClicker} />
        <Grid container>
          <CookieClick onIncrement={this.handleIncrementTotalCookies} />
        </Grid>
      </React.Fragment>
    );
  }
}

export default App;
