import { getRoot, types } from "mobx-state-tree"

import Achievement from "models/achievment"
import Dialog from "models/dialog"

import achievementData from "data/achievements_data.json"
import achievementUpgradesData from "data/achievements_upgrades_data.json"
import achievementsStaticData from "data/achievements_static_data.json"

const AchievementsStore = types
  .model("achievementsStore", {
    achievements: types.optional(types.array(Achievement), []),
    achievementsUpgrade: types.optional(types.array(Achievement), []),
    achievementBonus: types.optional(types.number, 0),
    dialog: types.optional(Dialog, {})
  })
  .actions(self => ({
    initialize() {
      achievementData.forEach(upgrade => {
        self.addAchievement(upgrade)
      })
      achievementUpgradesData.forEach(upgrade => {
        self.addAchievement(upgrade, true)
      })
    },
    addAchievement({ level, criteria, name }, isUpgrade) {
      let singleAchievment = Achievement.create({
        level,
        criteria,
        name
      })

      isUpgrade
        ? self.achievementsUpgrade.push(singleAchievment)
        : self.achievements.push(singleAchievment)
    },
    checkUserCookiesAchievement() {
      const {
        statisticsStore: { userCookies }
      } = getRoot(self)

      achievementsStaticData.criteriaClicking.forEach((criteria, index) => {
        if (userCookies >= criteria && self.achievements[0].level === index) {
          self.setDialogData({
            title: achievementsStaticData.nameClicking[index],
            description: achievementsStaticData.descriptionClicking[index],
            img: achievementsStaticData.imgClicking[index],
            id: 0,
            index,
            upgradeAmount: null
          })
        }
      })
    },
    checkAllTimeCookiesAchievement() {
      const {
        statusStore: { totalCookies }
      } = getRoot(self)

      achievementsStaticData.nameAllTimeCookies.forEach((criteria, index) => {
        if (
          totalCookies >= self.achievements[1].criteria &&
          self.achievements[1].level === index
        ) {
          self.setDialogData({
            title: achievementsStaticData.nameAllTimeCookies[index],
            description:
              achievementsStaticData.descriptionAllTimeCookies[index],
            img: achievementsStaticData.imgATCandCPS[index],
            id: 1,
            index,
            upgradeAmount: null
          })
        }
      })
    },
    checkCPSAchievement() {
      const {
        statusStore: { cookiePerSecond }
      } = getRoot(self)

      achievementsStaticData.nameCPS.forEach((criteria, index) => {
        if (
          cookiePerSecond >= achievementsStaticData.criteriaCPS[index] &&
          self.achievements[2].level === index
        ) {
          self.setDialogData({
            title: achievementsStaticData.nameCPS[index],
            description: achievementsStaticData.descriptionCPS[index],
            img: achievementsStaticData.imgATCandCPS[index],
            id: 2,
            index,
            upgradeAmount: null
          })
        }
      })
    },
    checkPlayerLevelAchievement() {
      const {
        statusStore: { playerLevel }
      } = getRoot(self)
      achievementsStaticData.nameCPS.forEach((criteria, index) => {
        if (
          playerLevel >= self.achievements[3].criteria &&
          self.achievements[3].level === index
        ) {
          self.setDialogData({
            show: true,
            title: achievementsStaticData.nameLevel[index + 1],
            description: achievementsStaticData.descriptionLevel[index + 1],
            img: achievementsStaticData.imgLevel[index + 1],
            id: 3,
            index,
            upgradeAmount: null
          })
        }
      })
    },
    checkUpgradeAchievements() {
      const {
        upgradeStore: { upgrades }
      } = getRoot(self)

      const upgradesAmount = [49, 50, 50, 50, 50, 50, 50, 50, 50, 50]

      for (let i = 0; i < self.achievementsUpgrade.length; i++) {
        for (let j = 0; j < upgradesAmount.length; j++) {
          if (
            self.achievementsUpgrade[i].level === j &&
            upgrades[i].count >= self.achievementsUpgrade[i].criteria
          ) {
            self.setDialogData({
              show: true,
              title: achievementsStaticData.upgrades[i][0][j],
              description: achievementsStaticData.upgrades[i][1][j],
              img: achievementsStaticData.upgrades[i][2][j],
              id: 4,
              index: i,
              upgradeAmount: upgradesAmount[j]
            })
          }
        }
      }
    },
    setDialogData({ title, description, img, id, index, upgradeAmount }) {
      self.dialog = {
        show: true,
        title,
        description,
        img,
        id,
        index,
        upgradeAmount
      }
    },
    setDialogShow(value) {
      self.dialog.show = value
    },
    handleAchievement(name, id, amount) {
      if (name === 0) {
        self.achievements[0].level = self.achievements[0].level + 1
      } else if (name === 1) {
        self.achievements[1].level = self.achievements[1].level + 1
        self.achievements[1].criteria = self.achievements[1].criteria * 100
      } else if (name === 2) {
        self.achievements[2].level = self.achievements[2].level + 1
      } else if (name === 3) {
        self.achievements[3].level = self.achievements[3].level + 1
        self.achievements[3].criteria = self.achievements[3].criteria + 1
      } else if (name === 4) {
        self.achievementsUpgrade[id].level =
          self.achievementsUpgrade[id].level + 1
        self.achievementsUpgrade[id].criteria =
          self.achievementsUpgrade[id].criteria + amount
      } else {
        self.achievements[name][id].achieve = true
      }
      self.achievementBonus = self.countAchievements()
    },
    countAchievements() {
      let allAchievements =
        achievementsStaticData.nameLevel.length +
        achievementsStaticData.nameAllTimeCookies.length +
        achievementsStaticData.nameCPS.length +
        achievementsStaticData.nameClicking.length +
        achievementsStaticData.upgrades.length * 11

      let allLevel = 0

      self.achievements.forEach(achievement => {
        allLevel += achievement.level
      })

      return (allLevel / allAchievements) * 100 || 0
    }
  }))

export default AchievementsStore
