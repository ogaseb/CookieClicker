import { types } from "mobx-state-tree"

const Upgrade = types.model("Upgrade", {
  upgrade: types.maybe(types.string),
  gfx: types.frozen(),
  count: types.maybe(types.number),
  multiplier: types.maybe(types.number),
  multiplierUpgrade: types.maybe(types.number),
  multiplierUpgradeLevel: types.maybe(types.number),
  basePrice: types.maybe(types.number),
  price: types.maybe(types.number)
})

export default Upgrade
