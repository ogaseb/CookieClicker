import { types, getRoot } from "mobx-state-tree"

const StatisticsStore = types
  .model("statisticsStore", {
    userClicks: types.optional(types.number, 0),
    userCookies: types.optional(types.number, 0),
    userClickToNextLevel: types.optional(types.number, 0)
  })
  .actions(self => ({
    handleCountClicks(cookies) {
      self.userClicks = self.userClicks + 1
      self.userCookies = self.userCookies + cookies
      self.userClickToNextLevel = Math.floor(
        getRoot(self).statusStore.playerToNextLevel - self.userClicks
      )
    }
  }))

export default StatisticsStore
