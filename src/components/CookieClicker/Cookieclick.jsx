import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
import "./Cookieclick.css";

import { makeWave } from "./utils.js";
class CookieClick extends Component {
  componentDidMount() {
    this.canvasMilkWave();

    let interval = () => {
      var time;
      let obj = {
        cps: [100, 10000, 1e6, 100e6, 1e9, 1e12, 1e18],
        time: [1000, 800, 600, 400, 200, 100, 50]
      };

      for (let i = 0; i < obj.cps.length; i++) {
        if (this.props.cps > obj.cps[i]) {
          this.fallingCookie();
          time = obj.time[i];
        }
      }

      setTimeout(interval, time);
    };
    setTimeout(interval, 1);
  }

  chooseRandomCookie() {
    const cookieArray = [
      require("../../gfx/cookies/cookie.png"),
      require("../../gfx/cookies/cookie1.png"),
      require("../../gfx/cookies/cookie2.png"),
      require("../../gfx/cookies/cookie3.png"),
      require("../../gfx/cookies/cookie4.png")
    ];
    let cookie = cookieArray[Math.floor(Math.random() * cookieArray.length)];
    return cookie;
  }

  fallingCookie = () => {
    const component = document.getElementById("Cookieclick");
    let compWidth = component.offsetWidth - 80;
    let rangeWidth = Math.floor(Math.random() * (compWidth - 0 + 1)) + 0;
    let randomTime = Math.floor(Math.random() * (10 - 2 + 1) + 2);

    let cookie = document.createElement("IMG");
    cookie.src = this.chooseRandomCookie();
    cookie.className = "cookieRandom";
    cookie.style.position = "absolute";
    cookie.style.left = rangeWidth + "px";
    cookie.style.top = "0px";
    cookie.style.zIndex = -1;
    cookie.style.maxWidth = "64px";
    cookie.style.animation = "cookieRandom " + randomTime + "s forwards linear";

    component.appendChild(cookie);

    if (component.childNodes.length > 150) {
      component.removeChild(component.childNodes[3]);
    }
  };
  onClick = number => {
    this.props.onIncrement(number);
    this.props.countClicks(number);
    this.fallingCookie();
  };

  canvasMilkWave = () => {
    makeWave("canvas");
  };

  render() {
    return (
      <Grid item xs={6}>
        <div
          id="Cookieclick"
          style={{
            position: "relative",
            height: "calc(100vh - 64px)"
          }}
        >
          <img
            src={require("../../gfx/cookies/PerfectCookie.png")}
            alt="PerfectCookie"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              maxWidth: "40%"
              // animation: "mainCookie 1s forwards linear"
            }}
          />
          <Button
            color="primary"
            children=""
            disableRipple={true}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
              width: "100%",
              height: "100%"
            }}
            onClick={() => this.onClick(this.props.quantityPerClick)}
          />

          <canvas
            id="canvas"
            style={{
              zIndex: 0,
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </Grid>
    );
  }
}

export default CookieClick;
