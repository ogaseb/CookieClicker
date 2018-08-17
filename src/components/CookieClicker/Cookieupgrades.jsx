import React, { Component } from "react";
import {
  Grid,
  Paper,
  Typography,
  Button
} from "../../../node_modules/@material-ui/core";

class CookieUpgrades extends Component {
  componentDidMount() {
    console.log(this.props.upgrades);
  }

  render() {
    // const { mouse, grandma } = this.props.upgrades;
    return (
      <Grid item xs={6} style={{ marginTop: 5 }}>
        {/* {this} */}
        {this.props.upgrades.map((content, index) => (
          <Paper key={index}>
            <Typography variant="display2" align="center">
              {" "}
              {content.upgrade}{" "}
            </Typography>
            <Typography>Ilość posiadanych: {content.count} </Typography>
            <Typography>Mnożnik: {content.multiplier} </Typography>
            <Typography>Koszt: {content.price} </Typography>
            <Button color="primary" onClick={() => this.props.onUpgrade(index)}>
              {" "}
              Kupuj{" "}
            </Button>
          </Paper>
        ))}
      </Grid>
    );
  }
}

export default CookieUpgrades;
