import { types, getRoot } from "mobx-state-tree"
import Upgrade from "models/upgrade"
import upgradeData from "data/upgrade_data"

const UpgradeStore = types
  .model("upgradeStore", {
    upgrades: types.optional(types.array(Upgrade), [])
  })
  .actions(self => ({
    initialize() {
      upgradeData.forEach(upgrade => {
        self.addUpgrade(upgrade)
      })
    },
    addUpgrade({
      upgrade,
      gfx,
      count,
      multiplier,
      multiplierUpgrade,
      multiplierUpgradeLevel,
      basePrice,
      price
    }) {
      let singleUpgrade = Upgrade.create({
        upgrade,
        gfx,
        count,
        multiplier,
        multiplierUpgrade,
        multiplierUpgradeLevel,
        basePrice,
        price
      })
      self.upgrades.push(singleUpgrade)
    },
    handleUpgrade(index, amount) {
      let price = 0
      for (let i = 1; i <= amount; i++) {
        price +=
          self.upgrades[index].basePrice *
          Math.pow(1.15, self.upgrades[index].count + (i - 1))
      }

      if (price > getRoot(self).statusStore.totalCookies) {
        return
      }

      getRoot(self).statusStore.handleDecrementCookies(price)
      self.incrementUpgradeCount(index, amount)
      self.upgrades[index].price = price

      getRoot(self).statusStore.calculateMultiplier()
    },
    handleMultiplierUpgrade(index) {
      if (
        self.upgrades[index].multiplierUpgrade >
        getRoot(self).statusStore.totalCookies
      ) {
        return
      }

      getRoot(self).statusStore.handleDecrementCookies(
        self.upgrades[index].multiplierUpgrade
      )
      self.incrementMultiplier(index)
      getRoot(self).statusStore.calculateMultiplier()
    },
    incrementUpgradeCount(index, amount) {
      self.upgrades[index].count = self.upgrades[index].count + amount
    },
    incrementMultiplier(index) {
      self.upgrades[index].multiplier = self.upgrades[index].multiplier * 2
      self.upgrades[index].multiplierUpgrade =
        self.upgrades[index].multiplierUpgrade * 10
      self.upgrades[index].multiplierUpgradeLevel =
        self.upgrades[index].multiplierUpgradeLevel + 1
    }
  }))

export default UpgradeStore
