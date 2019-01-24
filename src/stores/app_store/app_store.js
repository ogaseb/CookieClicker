import { types } from "mobx-state-tree"
import StatusStore from "../status_store/status_store"
import StatisticsStore from "../statistics_Store/statistics_store"
import UpgradeStore from "../upgrade_store/upgrade_store"
import AchievementsStore from "../achievements_store/achievements_store"

const AppStore = types.model("store", {
  statusStore: types.optional(StatusStore, {}),
  statisticsStore: types.optional(StatisticsStore, {}),
  upgradeStore: types.optional(UpgradeStore, {}),
  achievementsStore: types.optional(AchievementsStore, {})
})

export default AppStore
