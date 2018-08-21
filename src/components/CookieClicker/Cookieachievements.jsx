import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography
} from "@material-ui/core";

import achievementsStaticData from "../../data/achievementsStaticData.json";

class CookieAchievements extends Component {
  state = {
    dialog: {
      show: false,
      title: "",
      img: "",
      number: 0,
      description: "",
      index: 0,
      id: 0,
      upgradeAmount: null
    }
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.checkAchievements();
    }, 500);
    console.log(achievementsStaticData);
  }

  countAchievements = () => {
    let counter = 0;
    let howMuchAchieve = 0;
    for (let i = 0; i < this.props.achievements.length; i++) {
      for (let j = 0; j < this.props.achievements[i].length; j++) {
        counter++;
        if (this.props.achievements[i][j].achieve) {
          howMuchAchieve++;
        }
      }
    }
    return (howMuchAchieve / counter) * 10;
  };
  checkAchievements = () => {
    this.props.onAchievementBonus(this.countAchievements());

    for (let i = 0; i < this.props.achievements[0].length; i++) {
      if (
        this.props.statistics.userCookies >=
          this.props.achievements[0][i].criteria &&
        !this.props.achievements[0][i].achieve
      ) {
        let dialog = Object.assign({}, this.state.dialog);
        dialog.show = true;
        dialog.title = this.props.achievements[0][i].name;
        dialog.description = this.props.achievements[0][i].description;
        dialog.img = this.props.achievements[0][i].gfx;
        dialog.id = 0;
        dialog.index = i;
        dialog.upgradeAmount = null;
        this.setState({ dialog: dialog });
      }
    }
    for (let i = 0; i < this.props.achievements[1].length; i++) {
      if (
        this.props.status.totalCookies >=
          this.props.achievements[1][i].criteria &&
        !this.props.achievements[1][i].achieve
      ) {
        let dialog = Object.assign({}, this.state.dialog);
        dialog.show = true;
        // dialog.title = this.props.achievements[1][i].name;
        dialog.title = achievementsStaticData.nameAllTimeCookies[i];
        dialog.description =
          achievementsStaticData.descriptionAllTimeCookies[i];
        dialog.img = achievementsStaticData.imgATCandCPS[i];
        dialog.id = 1;
        dialog.index = i;
        dialog.upgradeAmount = null;
        this.setState({ dialog: dialog });
      }
    }
    for (let i = 0; i < this.props.achievements[2].length; i++) {
      if (
        this.props.status.cookiePerSecond >=
          this.props.achievements[2][i].criteria &&
        !this.props.achievements[2][i].achieve
      ) {
        let dialog = Object.assign({}, this.state.dialog);
        dialog.show = true;
        dialog.title = achievementsStaticData.nameCPS[i];
        dialog.description = achievementsStaticData.descriptionCPS[i];
        dialog.img = achievementsStaticData.imgATCandCPS[i];

        dialog.id = 2;
        dialog.index = i;
        dialog.upgradeAmount = null;
        this.setState({ dialog: dialog });
      }
    }
    for (let i = 0; i < this.props.achievements[3].length; i++) {
      if (
        this.props.status.playerLevel >=
          this.props.achievements[3][i].criteria &&
        !this.props.achievements[3][i].achieve
      ) {
        let dialog = Object.assign({}, this.state.dialog);
        dialog.show = true;

        dialog.title = achievementsStaticData.nameLevel[i];
        dialog.description = achievementsStaticData.descriptionLevel[i];
        dialog.img = achievementsStaticData.imgLevel[i];
        dialog.id = 3;
        dialog.index = i;
        dialog.upgradeAmount = null;
        this.setState({ dialog: dialog });
      }
    }

    const upgradesAmount = [49, 50, 50, 50, 50, 50, 50, 50, 50, 50];

    for (let i = 0; i < this.props.achievements[4].length; i++) {
      for (let j = 0; j < upgradesAmount.length; j++) {
        if (
          this.props.achievements[4][i].level === j &&
          this.props.upgrades[i].count >= this.props.achievements[4][i].criteria
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;

          dialog.title = achievementsStaticData.upgrades[i][0][j];
          dialog.description = achievementsStaticData.upgrades[i][1][j];
          dialog.img = achievementsStaticData.upgrades[i][2][j];

          // dialog.title = this.props.achievements[4][i].name[i];
          // dialog.description = this.props.achievements[4][i].description;
          // dialog.gfx = this.props.achievements[3][i].gfx;
          dialog.id = 4;
          dialog.index = i;
          dialog.upgradeAmount = upgradesAmount[j];
          this.setState({ dialog: dialog });
        }
      }
    }
  };
  handleClose = () => {
    this.props.onAchievement(
      this.state.dialog.id,
      this.state.dialog.index,
      this.state.dialog.upgradeAmount
    );
    let dialog = Object.assign({}, this.state.dialog);
    dialog.show = false;
    this.setState({ dialog: dialog });
  };
  render() {
    return (
      <div>
        <Dialog
          open={this.state.dialog.show}
          keepMounted
          onClose={this.handleClose}
          onKeyPress={this.handleClose}
          disableBackdropClick={true}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            id="alert-dialog-slide-title"
            children={this.state.dialog.title}
            align="center"
          />
          <DialogContent>
            <Typography align="center">
              <img
                src={this.state.dialog.img}
                alt="achievement"
                style={{ minHeight: 60, minWidth: "auto" }}
              />
            </Typography>
            <DialogContentText
              id="alert-dialog-slide-description"
              align="center"
            >
              {this.state.dialog.description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              style={{ width: "100%" }}
              onClick={this.handleClose}
              color="primary"
            >
              Woah!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CookieAchievements;
