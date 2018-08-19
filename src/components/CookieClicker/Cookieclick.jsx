import React, { Component } from "react";
import { Grid, Button } from "../../../node_modules/@material-ui/core";
import "./Cookieclick.css";
class CookieClick extends Component {
  componentDidMount() {
    this.canvasMilkWave();
  }

  cookieMilk = () => {};
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
    const component = document.getElementById("Cookieclick");
    let compWidth = component.offsetWidth - 80;
    let rangeWidth = Math.floor(Math.random() * (compWidth - 0 + 1)) + 0;

    let cookie = document.createElement("IMG");
    cookie.src = this.chooseRandomCookie();
    cookie.className = "cookieRandom";
    cookie.style.position = "absolute";
    cookie.style.left = rangeWidth + "px";
    cookie.style.top = "0px";
    cookie.style.zIndex = -1;
    cookie.style.maxWidth = "64px";
    cookie.style.animation = "cookieRandom 10s forwards linear";

    component.appendChild(cookie);

    if (component.childNodes.length > 100) {
      component.removeChild(component.childNodes[1]);
    }
  };

  canvasMilkWave = () => {
    //https://codepen.io/jackrugile/pen/BvLHg
    const component = document.getElementById("Cookieclick");

    var c = document.getElementById("canvas"),
      ctx = c.getContext("2d"),
      cw = (c.width = component.offsetWidth - 5),
      ch = (c.height = component.offsetHeight - 5),
      points = [],
      tick = 0,
      opt = {
        count: 5,
        range: {
          x: 20,
          y: 30
        },
        duration: {
          min: 20,
          max: 40
        },
        thickness: 10,
        strokeColor: "#daab71",
        level: 0.15,
        curved: true
      },
      rand = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
      ease = function(t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      };

    ctx.lineJoin = "round";
    ctx.lineWidth = opt.thickness;
    ctx.strokeStyle = opt.strokeColor;

    var Point = function(config) {
      this.anchorX = config.x;
      this.anchorY = config.y;
      this.x = config.x;
      this.y = config.y;
      this.setTarget();
    };

    Point.prototype.setTarget = function() {
      this.initialX = this.x;
      this.initialY = this.y;
      this.targetX = this.anchorX + rand(0, opt.range.x * 2) - opt.range.x;
      this.targetY = this.anchorY + rand(0, opt.range.y * 2) - opt.range.y;
      this.tick = 0;
      this.duration = rand(opt.duration.min, opt.duration.max);
    };

    Point.prototype.update = function() {
      var dx = this.targetX - this.x;
      var dy = this.targetY - this.y;
      var dist = Math.sqrt(dx * dx + dy * dy);

      if (Math.abs(dist) <= 0) {
        this.setTarget();
      } else {
        var t = this.tick;
        var b = this.initialY;
        var c = this.targetY - this.initialY;
        var d = this.duration;
        this.y = ease(t, b, c, d);

        b = this.initialX;
        c = this.targetX - this.initialX;
        d = this.duration;
        this.x = ease(t, b, c, d);

        this.tick++;
      }
    };

    Point.prototype.render = function() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, false);
      ctx.fillStyle = "#000";
      ctx.fill();
    };

    var updatePoints = function() {
      var i = points.length;
      while (i--) {
        points[i].update();
      }
    };

    var renderShape = function() {
      ctx.beginPath();
      var pointCount = points.length;
      ctx.moveTo(points[0].x, points[0].y);
      var i;
      for (i = 0; i < pointCount - 1; i++) {
        var c = (points[i].x + points[i + 1].x) / 2;
        var d = (points[i].y + points[i + 1].y) / 2;
        ctx.quadraticCurveTo(points[i].x, points[i].y, c, d);
      }
      ctx.lineTo(-opt.range.x - opt.thickness, ch + opt.thickness);
      ctx.lineTo(cw + opt.range.x + opt.thickness, ch + opt.thickness);
      ctx.closePath();
      ctx.fillStyle = "#e5c49b";
      ctx.fill();
      ctx.stroke();
    };

    var clear = function() {
      ctx.clearRect(0, 0, cw, ch);
    };

    var loop = function() {
      window.requestAnimFrame(loop, c);
      tick++;
      clear();
      updatePoints();
      renderShape();
    };

    var i = opt.count + 2;
    var spacing = (cw + opt.range.x * 2) / (opt.count - 1);
    while (i--) {
      points.push(
        new Point({
          x: spacing * (i - 1) - opt.range.x,
          y: ch - ch * opt.level
        })
      );
    }

    window.requestAnimFrame = (function() {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame
      );
    })();

    loop();
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
            onClick={() => this.placeCookie(this.props.quantityPerClick)}
          />

          <canvas id="canvas" style={{ position: "relative", zIndex: 0 }} />
        </div>
      </Grid>
    );
  }
}

export default CookieClick;
