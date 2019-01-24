import { types, getRoot } from "mobx-state-tree"

const StatusStore = types
  .model("statusStore", {
    totalCookies: types.optional(types.number, 0),
    playerLevel: types.optional(types.number, 1),
    playerToNextLevel: types.optional(types.number, 10),
    cookiePerSecond: types.optional(types.number, 0),
    quantityPerClick: types.optional(types.number, 1)
  })
  .actions(self => ({
    handleIncrementTotalCookies(cookies) {
      self.totalCookies = self.totalCookies + cookies

      if (getRoot(self).statisticsStore.userClicks >= self.playerToNextLevel) {
        self.handleLevelUp()
        self.handleIncreaseRequirements()
      }
    },
    handleDecrementCookies(cookies) {
      self.totalCookies = self.totalCookies - cookies
    },
    handleLevelUp() {
      self.playerLevel = self.playerLevel + 1
    },
    handleIncreaseRequirements() {
      self.playerToNextLevel = self.playerToNextLevel * 2
    },
    calculateMultiplier() {
      let tempSum = 0
      for (let i = 0; i < getRoot(self).upgradeStore.upgrades.length; i++) {
        tempSum +=
          getRoot(self).upgradeStore.upgrades[i].count *
          getRoot(self).upgradeStore.upgrades[i].multiplier
      }
      self.cookiePerSecond = tempSum
    }
  }))

export default StatusStore
