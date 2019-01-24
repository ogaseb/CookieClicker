import React, { Component } from "react"
import { Paper, Typography } from "@material-ui/core"
import { inject, observer } from "mobx-react"
import styled from "styled-components"

const StyledPaper = styled(Paper)`
  padding: 15px;
  position: absolute;
  top: 25%;
  left: 25%;
  transform: translate(-50%, -50%);
`

class CookieStatus extends Component {
  render() {
    const {
      store: {
        statusStore: { totalCookies, playerLevel, cookiePerSecond },
        statisticsStore: { userClickToNextLevel }
      }
    } = this.props
    return (
      <StyledPaper id="Cookiestatus" square={true} color="inherit">
        <Typography align="center" color="inherit">
          Cookies:
          <span>{totalCookies}</span>
        </Typography>
        <Typography align="center" color="inherit">
          Level: <span>{playerLevel}</span> | to next:
          <span>{userClickToNextLevel}</span>
        </Typography>
        <Typography align="center" color="inherit">
          CPS:
          <span>
            {(cookiePerSecond || 0).toFixed(1).toLocaleString("de-DE")}
          </span>
        </Typography>
      </StyledPaper>
    )
  }
}

export { CookieStatus }
export default inject("store")(observer(CookieStatus))
