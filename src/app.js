import React, { Component } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

import Grid from "@material-ui/core/Grid"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"

import CookieClick from "components/cookie_clicker/click/click"
import CookieStatus from "components/cookie_clicker/status/status"
import CookieUpgrades from "components/cookie_clicker/upgrades/upgrades"
import CookieAchievements from "components/cookie_clicker/achievements/achievements"

import Autorenew from "@material-ui/icons/Autorenew"
import GithubCircle from "mdi-material-ui/GithubCircle"

import "./app.css"
import { inject, observer } from "mobx-react"

const StyledAppBar = styled(AppBar)`
  background-color: #1769aa;
`

const IconButtonGithub = styled(IconButton)`
  && {
    position: absolute;
    right: 50px;
  }
`

const IconButtonAutoRenew = styled(IconButton)`
  && {
    position: absolute;
    right: 0;
  }
`

class App extends Component {
  componentDidMount() {
    this.CPSinterval = setInterval(() => {
      const {
        store: {
          statusStore: { cookiePerSecond, handleIncrementTotalCookies }
        }
      } = this.props
      handleIncrementTotalCookies(cookiePerSecond)
    }, 1000)
  }

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <title>
            {`${this.props.store.statusStore.totalCookies}`} - cookies
          </title>
        </Helmet>
        <StyledAppBar position="static">
          <Toolbar>
            <Typography variant="headline" color="inherit">
              CookieClicker
            </Typography>
            <IconButtonGithub
              href="https://github.com/ProPanek/CookieClicker"
              target="_blank"
              color="inherit"
            >
              <GithubCircle />
            </IconButtonGithub>
            <IconButtonAutoRenew color="inherit">
              <Autorenew />
            </IconButtonAutoRenew>
          </Toolbar>
        </StyledAppBar>
        <CookieStatus />
        <CookieAchievements />
        <Grid container>
          <CookieClick />
          <CookieUpgrades />
        </Grid>
      </React.Fragment>
    )
  }
}

export default inject("store")(observer(App))
