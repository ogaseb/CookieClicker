import React, { Component } from "react";
import { Grid, Button } from "../../../node_modules/@material-ui/core";
class CookieClick extends Component {
  state = {
    timeouts: []
  };
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
    this.props.countClicks();
    // console.log(rand.toString());
    let counter = 0;
    const component = document.getElementById("Cookieclick");
    let compWidth = component.offsetWidth - 70;
    let rangeWidth = Math.floor(Math.random() * (compWidth - 0 + 1)) + 0;

    let compHeight = component.offsetHeight - 70;
    let rangeHeight = Math.floor(Math.random() * (compHeight - 0 + 1)) + 0;

    let randomDeg = Math.floor(Math.random() * (360 - 0 + 1)) + 0;

    let cookie = document.createElement("IMG");
    cookie.src = this.chooseRandomCookie();
    cookie.className = "cookieRandom" + counter;
    cookie.style.position = "absolute";
    cookie.style.left = rangeWidth + "px";
    cookie.style.top = rangeHeight + "px";
    cookie.style.zIndex = -1;
    cookie.style.maxWidth = "64px";
    cookie.style.transform = "rotate(" + randomDeg + "deg)";

    component.appendChild(cookie);

    if (component.childNodes.length > 250) {
      // Or just `if (element.childNodes.length)`
      component.removeChild(component.childNodes[1]);
    }
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
          />
        </div>
      </Grid>
    );
  }
}

export default CookieClick;
