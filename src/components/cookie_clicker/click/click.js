import React, { Component } from "react"
import { Button, Grid } from "@material-ui/core"
import "./cookieclick.css"
import styled from "styled-components"
import { makeWave } from "components/cookie_clicker/utils/utils"
import perfectCookie from "gfx/cookies/PerfectCookie.png"
import cookie1 from "gfx/cookies/cookie.png"
import cookie2 from "gfx/cookies/cookie1.png"
import cookie3 from "gfx/cookies/cookie2.png"
import cookie4 from "gfx/cookies/cookie3.png"
import cookie5 from "gfx/cookies/cookie4.png"
import { inject, observer } from "mobx-react"

const StyledCookieClick = styled.div`
  position: relative;
  height: calc(100vh - 64px);
`

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  max-width: 40%;
`

const StyledButton = styled(Button)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 100%;
  height: 100%;
`

const StyledCanvas = styled.canvas`
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
`

class CookieClick extends Component {
  componentDidMount() {
    this.canvasMilkWave()

    let interval = () => {
      let time
      let obj = {
        cps: [100, 10000, 1e6, 100e6, 1e9, 1e12, 1e18],
        time: [1000, 800, 600, 400, 200, 100, 50]
      }

      for (let i = 0; i < obj.cps.length; i++) {
        if (this.props.cps > obj.cps[i]) {
          this.fallingCookie()
          time = obj.time[i]
        }
      }

      setTimeout(interval, time)
    }
    setTimeout(interval, 1)
  }

  chooseRandomCookie = () => {
    const cookieArray = [cookie1, cookie2, cookie3, cookie4, cookie5]
    return cookieArray[Math.floor(Math.random() * cookieArray.length)]
  }

  fallingCookie = () => {
    let compWidth = this.styledCookieClick.offsetWidth - 80
    let rangeWidth = Math.floor(Math.random() * (compWidth + 1))
    let randomTime = Math.floor(Math.random() * (10 - 2 + 1) + 2)

    let cookie = document.createElement("IMG")
    cookie.src = this.chooseRandomCookie()
    cookie.className = "cookieRandom"
    cookie.style.position = "absolute"
    cookie.style.left = rangeWidth + "px"
    cookie.style.top = "0px"
    cookie.style.zIndex = "-1"
    cookie.style.maxWidth = "64px"
    cookie.style.animation = "cookieRandom " + randomTime + "s forwards linear"

    this.styledCookieClick.appendChild(cookie)

    setTimeout(() => {
      this.styledCookieClick.removeChild(cookie)
    }, randomTime * 1000)
  }

  handleClick = () => {
    const {
      store: {
        statusStore: { quantityPerClick, handleIncrementTotalCookies },
        statisticsStore: { handleCountClicks },
        achievementsStore: { achievementBonus }
      }
    } = this.props
    handleIncrementTotalCookies(quantityPerClick + achievementBonus)
    handleCountClicks(quantityPerClick + achievementBonus)
    this.fallingCookie()
  }

  canvasMilkWave = () => {
    makeWave("canvas")
  }

  render() {
    return (
      <Grid item xs={6}>
        <StyledCookieClick
          ref={target => {
            this.styledCookieClick = target
          }}
        >
          <StyledImage src={perfectCookie} alt="perfectCookie" />
          <StyledButton
            color="primary"
            disableRipple={true}
            onClick={this.handleClick}
          />
          <StyledCanvas id="canvas" />
        </StyledCookieClick>
      </Grid>
    )
  }
}

export default inject("store")(observer(CookieClick))
