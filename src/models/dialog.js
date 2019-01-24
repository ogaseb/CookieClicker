import { types } from "mobx-state-tree"

const Dialog = types.model("Dialog", {
  show: types.optional(types.boolean, false),
  title: types.optional(types.string, ""),
  description: types.optional(types.string, ""),
  img: types.optional(types.string, ""),
  id: types.optional(types.number, 0),
  index: types.optional(types.number, 0),
  upgradeAmount: types.optional(types.maybeNull(types.number), 0)
})

export default Dialog
