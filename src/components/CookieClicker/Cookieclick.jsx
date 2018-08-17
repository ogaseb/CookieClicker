import React, { Component } from "react";
import { Grid, Paper, Button } from "../../../node_modules/@material-ui/core";
class CookieClick extends Component {
  windowHeight() {
    return document.documentElement.scrollHeight - 100;
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
  placeCookie = number => {
    this.props.onIncrement(number);

    // console.log(rand.toString());
    const component = document.getElementById("Cookieclick");
    let compWidth = component.offsetWidth - 36;
    let rangeWidth = Math.floor(Math.random() * (compWidth - 0 + 1)) + 0;
    let compHeight = component.offsetHeight - 100;
    console.log(compHeight)

    let rangeHeight = Math.floor(Math.random() * (compHeight - 100 + 1)) + 0;
    let randomDeg = Math.floor(Math.random() * (360 - 0 + 1)) + 0;

    let cookie = document.createElement("IMG");
    cookie.src = this.chooseRandomCookie();
    cookie.style.position = "absolute";
    cookie.style.left = rangeWidth + "px";
    cookie.style.top = rangeHeight + "px";
    cookie.style.zIndex = 0;
    cookie.style.maxWidth = "36px";
    cookie.style.transform = "rotate(" + randomDeg + "deg)";

    component.appendChild(cookie);
  };

  render() {
    return (
      <Grid item xs={6}>
        <div
          id="Cookieclick"
          style={{
            height: this.windowHeight(),
            position: "relative"
          }}
        >
          <Button
            color="primary"
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
            onClick={() => this.placeCookie(1)}
          >
            Click me!
          </Button>
        </div>
      </Grid>
    );
  }
}

export default CookieClick;
