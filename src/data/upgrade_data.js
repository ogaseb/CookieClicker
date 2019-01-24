import cursor from "../gfx/upgrades/Cursor.png"
import grandmas from "../gfx/upgrades/Grandmas.gif"
import farm from "../gfx/upgrades/Farm.png"
import mine from "../gfx/upgrades/Mine.png"
import factory from "../gfx/upgrades/Factory.png"
import bank from "../gfx/upgrades/Bank.png"
import temple from "../gfx/upgrades/Temple.png"
import wizardTower from "../gfx/upgrades/Wizardtower.png"
import shipment from "../gfx/upgrades/Shipment.png"
import alchemyLab from "../gfx/upgrades/Alchemylab.png"
import portal from "../gfx/upgrades/Portal.png"
import timeMachine from "../gfx/upgrades/Timemachine.png"
import antim from "../gfx/upgrades/Antim.png"
import prism from "../gfx/upgrades/Prism.png"
import chanceMaker from "../gfx/upgrades/Chancemaker.png"

const upgrades = [
  {
    upgrade: "Cursor",
    gfx: cursor,
    count: 0,
    multiplier: 0.1,
    multiplierUpgrade: 50,
    multiplierUpgradeLevel: 0,
    basePrice: 15,
    price: 15
  },
  {
    upgrade: "Grandma",
    gfx: grandmas,
    count: 0,
    multiplier: 1,
    multiplierUpgrade: 500,
    multiplierUpgradeLevel: 0,
    basePrice: 100,
    price: 100
  },
  {
    upgrade: "Farm",
    gfx: farm,
    count: 0,
    multiplier: 8,
    multiplierUpgrade: 5500,
    multiplierUpgradeLevel: 0,
    basePrice: 1100,
    price: 1100
  },
  {
    upgrade: "Mine",
    gfx: mine,
    count: 0,
    multiplier: 47,
    multiplierUpgrade: 60000,
    multiplierUpgradeLevel: 0,
    basePrice: 12000,
    price: 12000
  },
  {
    upgrade: "Factory",
    gfx: factory,
    count: 0,
    multiplier: 260,
    multiplierUpgrade: 650000,
    multiplierUpgradeLevel: 0,
    basePrice: 130000,
    price: 130000
  },
  {
    upgrade: "Bank",
    gfx: bank,
    count: 0,
    multiplier: 1400,
    multiplierUpgrade: 7000000,
    multiplierUpgradeLevel: 0,
    basePrice: 1400000,
    price: 1400000
  },
  {
    upgrade: "Temple",
    gfx: temple,
    count: 0,
    multiplier: 7800,
    multiplierUpgrade: 10000000,
    multiplierUpgradeLevel: 0,
    basePrice: 20000000,
    price: 20000000
  },
  {
    upgrade: "Wizard Tower",
    gfx: wizardTower,
    count: 0,
    multiplier: 44000,
    multiplierUpgrade: 650000000,
    multiplierUpgradeLevel: 0,
    basePrice: 330000000,
    price: 330000000
  },
  {
    upgrade: "Shipment",
    gfx: shipment,
    count: 0,
    multiplier: 260000,
    multiplierUpgrade: 2250000000,
    multiplierUpgradeLevel: 0,
    basePrice: 5100000000,
    price: 5100000000
  },
  {
    upgrade: "Alchemy Lab",
    gfx: alchemyLab,
    count: 0,
    multiplier: 1600000,
    multiplierUpgrade: 37500000000,
    multiplierUpgradeLevel: 0,
    basePrice: 75000000000,
    price: 75000000000
  },
  {
    upgrade: "Portal",
    gfx: portal,
    count: 0,
    multiplier: 10000000,
    multiplierUpgrade: 500000000000,
    multiplierUpgradeLevel: 0,
    basePrice: 100000000000,
    price: 100000000000
  },
  {
    upgrade: "Time Machine",
    gfx: timeMachine,
    count: 0,
    multiplier: 65000000,
    multiplierUpgrade: 7000000000000,
    multiplierUpgradeLevel: 0,
    basePrice: 1400000000000,
    price: 1400000000000
  },
  {
    upgrade: "Antimater Condenser",
    gfx: antim,
    count: 0,
    multiplier: 430000000,
    multiplierUpgrade: 85000000000000,
    multiplierUpgradeLevel: 0,
    basePrice: 17000000000000,
    price: 17000000000000
  },
  {
    upgrade: "Prism",
    gfx: prism,
    count: 0,
    multiplier: 2900000000,
    multiplierUpgrade: 105000000000000,
    multiplierUpgradeLevel: 0,
    basePrice: 210000000000000,
    price: 210000000000000
  },
  {
    upgrade: "Chancemaker",
    gfx: chanceMaker,
    count: 0,
    multiplier: 21000000000,
    multiplierUpgrade: 1300000000000000,
    multiplierUpgradeLevel: 0,
    basePrice: 2600000000000000,
    price: 2600000000000000
  }
]

export default upgrades
