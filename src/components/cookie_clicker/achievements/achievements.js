import React, { Component } from "react"
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
  Fade
} from "@material-ui/core"
import { inject, observer } from "mobx-react"
import { reaction } from "mobx"
import styled from "styled-components"

const StyledImage = styled.img`
  min-height: 60px;
  min-width: auto;
  max-height: 60px;
`

const StyledButton = styled(Button)`
  width: 100%;
`

function Transition(props) {
  return <Fade direction="up" {...props} />
}

class CookieAchievements extends Component {
  constructor(props) {
    super(props)
    reaction(
      () => this.props.store.statisticsStore.userCookies,
      () => {
        this.props.store.achievementsStore.checkUserCookiesAchievement()
      }
    )

    reaction(
      () => this.props.store.statusStore.totalCookies,
      () => {
        this.props.store.achievementsStore.checkAllTimeCookiesAchievement()
      }
    )

    reaction(
      () => this.props.store.statusStore.cookiePerSecond,
      () => {
        this.props.store.achievementsStore.checkCPSAchievement()
      }
    )

    reaction(
      () => this.props.store.statusStore.playerLevel,
      () => {
        this.props.store.achievementsStore.checkPlayerLevelAchievement()
      }
    )
  }

  componentDidMount() {
    this.props.store.achievementsStore.initialize()
    this.interval = setInterval(() => {
      this.props.store.achievementsStore.checkUpgradeAchievements()
    }, 500)
  }

  handleClose = () => {
    const {
      store: {
        achievementsStore: { dialog }
      }
    } = this.props

    this.props.store.achievementsStore.handleAchievement(
      dialog.id,
      dialog.index,
      dialog.upgradeAmount
    )
    this.props.store.achievementsStore.setDialogShow(false)
  }

  render() {
    const {
      store: {
        achievementsStore: { dialog }
      }
    } = this.props
    return (
      <>
        <Dialog
          open={dialog.show}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleClose}
          onKeyPress={this.handleClose}
          disableBackdropClick={true}
        >
          <DialogTitle id="alert-dialog-slide-title" align="center">
            {dialog.title}
          </DialogTitle>
          <DialogContent>
            <Typography align="center">
              <StyledImage src={dialog.img} alt="achievement" />
            </Typography>
            <DialogContentText
              id="alert-dialog-slide-description"
              align="center"
            >
              {dialog.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <StyledButton onClick={this.handleClose} color="primary">
              Woah!
            </StyledButton>
          </DialogActions>
        </Dialog>
      </>
    )
  }
}

export default inject("store")(observer(CookieAchievements))
