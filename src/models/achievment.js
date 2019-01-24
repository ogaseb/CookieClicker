import { types } from "mobx-state-tree"

const Achievement = types.model("Achievement", {
  level: types.optional(types.number, 0),
  criteria: types.maybe(types.number),
  name: types.maybe(types.string),
  achieve: types.optional(types.boolean, false)
})

export default Achievement
