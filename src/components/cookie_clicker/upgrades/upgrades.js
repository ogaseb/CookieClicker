import React, { Component } from "react"
import { Grid, Paper, Typography, Button } from "@material-ui/core"
import { nFormatter } from "../utils/utils.js"
import { inject, observer } from "mobx-react"
import styled from "styled-components"

const StyledButton = styled(Button)`
  flex: 1;
`

const ButtonWrapper = styled(Paper)`
  width: 100%;
  display: flex;
  flex-direction: row;
`

const StyledTypography = styled(Typography)`
  flex: 1;
  font-size: 12px;
`

const PriceWrapper = styled(Paper)`
  display: flex;
  flex-direction: row;
`

const StyledGrid = styled(Grid)`
  margin-top: 5;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 70px);
`

class CookieUpgrades extends Component {
  componentDidMount() {
    this.props.store.upgradeStore.initialize()
  }

  countPrice = (index, amount) => {
    const {
      store: {
        upgradeStore: { upgrades }
      }
    } = this.props
    let price = 0

    for (let i = 1; i <= amount; i++) {
      price +=
        upgrades[index].basePrice *
        Math.pow(1.15, upgrades[index].count + (i - 1))
    }
    return price
  }
  upgradeButtonCheck = (index, amount) => {
    const {
      store: {
        statusStore: { totalCookies }
      }
    } = this.props

    let price = this.countPrice(index, amount)
    return totalCookies < price
  }

  multiplierButtonCheck = index => {
    const {
      store: {
        upgradeStore: { upgrades }
      }
    } = this.props
    let obj = {
      count: [1, 5, 25, 50, 100, 150, 200, 250, 300, 350, 400],
      multiplierUpgradeLevel: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
    for (let i = 0; i < obj.count.length; i++) {
      if (
        upgrades[index].count >= obj.count[i] &&
        upgrades[index].multiplierUpgradeLevel === obj.multiplierUpgradeLevel[i]
      ) {
        return false
      }
    }
    return true
  }

  render() {
    const {
      store: {
        statusStore: { playerLevel },
        upgradeStore: { upgrades, handleUpgrade, handleMultiplierUpgrade }
      }
    } = this.props

    return (
      <StyledGrid item xs={6}>
        {upgrades.slice(0, playerLevel).map((content, index) => (
          <Paper key={index}>
            <Typography variant="display1" align="center">
              <img src={content.gfx} alt={content.upgrade} />
            </Typography>
            <Typography variant="display1" align="center">
              {content.upgrade}
            </Typography>
            <Typography align="center">Count: {content.count}</Typography>
            {this.multiplierButtonCheck(index) === false && (
              <Typography align="center">
                Price of multiplier upgrade:
                {nFormatter(content.multiplierUpgrade, 3)}
              </Typography>
            )}

            <Typography align="center">
              <Button
                variant="contained"
                color="inherit"
                disabled={this.multiplierButtonCheck(index)}
                onClick={() => {
                  handleMultiplierUpgrade(index)
                }}
              >
                Multiplier: {content.multiplier}
              </Button>
            </Typography>
            <Typography align="center" style={{ paddingBottom: "10px" }}>
              Price
            </Typography>
            <PriceWrapper square={true} align="center">
              <StyledTypography>
                {nFormatter(Math.floor(this.countPrice(index, 1)), 2)}
              </StyledTypography>{" "}
              <StyledTypography>
                {nFormatter(Math.floor(this.countPrice(index, 10)), 2)}
              </StyledTypography>{" "}
              <StyledTypography>
                {nFormatter(Math.floor(this.countPrice(index, 100)), 2)}
              </StyledTypography>
            </PriceWrapper>
            <ButtonWrapper square={true} align="center">
              <StyledButton
                disabled={this.upgradeButtonCheck(index, 1)}
                variant="contained"
                color="primary"
                onClick={() => handleUpgrade(index, 1)}
              >
                Buy
              </StyledButton>
              <StyledButton
                disabled={this.upgradeButtonCheck(index, 10)}
                variant="contained"
                color="default"
                onClick={() => handleUpgrade(index, 10)}
              >
                x10
              </StyledButton>
              <StyledButton
                disabled={this.upgradeButtonCheck(index, 100)}
                variant="contained"
                color="default"
                onClick={() => handleUpgrade(index, 100)}
              >
                x100
              </StyledButton>
            </ButtonWrapper>
          </Paper>
        ))}
      </StyledGrid>
    )
  }
}

export default inject("store")(observer(CookieUpgrades))
