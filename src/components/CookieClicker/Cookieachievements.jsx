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

    for (let i = 0; i < this.props.achievements.length; i++) {
      for (let j = 0; j < this.props.achievements[i].length; j++) {
        if (
          i === 0 &&
          this.props.statistics.userClicks >=
            this.props.achievements[i][j].criteria &&
          !this.props.achievements[i][j].achieve
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;
          dialog.title = this.props.achievements[i][j].name;
          dialog.description = this.props.achievements[i][j].description;
          this.props.onAchievement(i, j);
          this.setState({ dialog: dialog });
        }
        if (
          i === 1 &&
          this.props.status.totalCookies >=
            this.props.achievements[i][j].criteria &&
          !this.props.achievements[i][j].achieve
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;
          dialog.title = this.props.achievements[i][j].name;
          dialog.description = this.props.achievements[i][j].description;
          this.props.onAchievement(i, j);
          this.setState({ dialog: dialog });
        }
        if (
          i === 2 &&
          this.props.status.cookiePerSecond >=
            this.props.achievements[i][j].criteria &&
          !this.props.achievements[i][j].achieve
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;
          dialog.title = this.props.achievements[i][j].name;
          dialog.description = this.props.achievements[i][j].description;
          this.props.onAchievement(i, j);
          this.setState({ dialog: dialog });
        }
        if (
          i === 3 &&
          this.props.status.playerLevel >=
            this.props.achievements[i][j].criteria &&
          !this.props.achievements[i][j].achieve
        ) {
          let dialog = Object.assign({}, this.state.dialog);
          dialog.show = true;
          dialog.title = this.props.achievements[i][j].name;
          dialog.description = this.props.achievements[i][j].description;
          this.props.onAchievement(i, j);
          this.setState({ dialog: dialog });
        }
      }
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
