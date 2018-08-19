import React, { Component } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";

class CookieAchievements extends Component {
  state = {
    dialog: {
      show: false,
      title: "",
      number: 0,
      description: ""
    }
  };
  componentDidMount() {
    this.interval = setInterval(() => {
      this.checkAchievements();
    }, 1000);
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
        this.props.statistics.userClicks >=
          this.props.achievements[0][i].criteria &&
        !this.props.achievements[0][i].achieve
      ) {
        let dialog = Object.assign({}, this.state.dialog);
        dialog.show = true;
        dialog.title = this.props.achievements[0][i].name;
        dialog.description = this.props.achievements[0][i].description;
        this.props.onAchievement(0, i);
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
        dialog.title = this.props.achievements[1][i].name;
        dialog.description = this.props.achievements[1][i].description;
        this.props.onAchievement(1, i);
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
        dialog.title = this.props.achievements[2][i].name;
        dialog.description = this.props.achievements[2][i].description;
        this.props.onAchievement(2, i);
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
        dialog.title = this.props.achievements[3][i].name;
        dialog.description = this.props.achievements[3][i].description;
        this.props.onAchievement(3, i);
        this.setState({ dialog: dialog });
      }
    }

    const upgradesAmount = [
      1,
      48,
      50,
      100,
      100,
      100,
      100,
      100,
      1e18,
      1e21,
      1e24
    ];

    for (let i = 0; i < this.props.achievements[4].length; i++) {
      for (let j = 0; j < upgradesAmount.length; j++) {
        if (
          this.props.achievements[4][i].level === j &&
          this.props.upgrades[i].count ===
            this.props.achievements[4][i].criteria
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;
          dialog.title = this.props.achievements[4][i].name;
          dialog.description = this.props.achievements[4][i].description;
          this.props.onAchievement(4, i, upgradesAmount[j]);
          this.setState({ dialog: dialog });
        }
      }
      // if (
      //   this.props.achievements[4][i].level === 1 &&
      //   this.props.upgrades[i].count === this.props.achievements[4][i].criteria
      // ) {
      //   let dialog = Object.assign({}, this.state.dialog);
      //   dialog.show = true;
      //   dialog.title = this.props.achievements[4][i].name;
      //   dialog.description = this.props.achievements[4][i].description;
      //   this.props.onAchievement(4, i, 48);
      //   this.setState({ dialog: dialog });
      // }

      // if (
      //   this.props.achievements[4][i].level === 2 &&
      //   this.props.upgrades[i].count === this.props.achievements[4][i].criteria
      // ) {
      //   let dialog = Object.assign({}, this.state.dialog);
      //   dialog.show = true;
      //   dialog.title = this.props.achievements[4][i].name;
      //   dialog.description = this.props.achievements[4][i].description;
      //   this.props.onAchievement(4, i, 50);
      //   this.setState({ dialog: dialog });
      // }

      // console.log(i, j);
      // }
    }
  };
  handleClose = () => {
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
          disableBackdropClick={true}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle
            id="alert-dialog-slide-title"
            children={this.state.dialog.title}
          />
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
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
