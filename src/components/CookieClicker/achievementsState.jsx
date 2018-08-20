const achievements = [
  [
    {
      // Cookies made per hand
      name: "Clicktastic",
      gfx: require("../../gfx/achievements/clicking/1.png"),
      achieve: false,
      criteria: 1000,
      description: "Make 1,000 cookies from clicking."
    },
    {
      name: "Clickathlon",
      gfx: require("../../gfx/achievements/clicking/2.png"),
      achieve: false,
      criteria: 100000,
      description: "Make 100,000 cookies from clicking."
    },
    {
      name: "Clickolympics",
      gfx: require("../../gfx/achievements/clicking/3.png"),
      achieve: false,
      criteria: 10e6,
      description: "Make 10 million cookies from clicking."
    },
    {
      name: "Clickorama",
      gfx: require("../../gfx/achievements/clicking/4.png"),
      achieve: false,
      criteria: 1e9,
      description: "Make 1 billion cookies from clicking."
    },
    {
      name: "Clickasmic",
      gfx: require("../../gfx/achievements/clicking/5.png"),
      achieve: false,
      criteria: 100e9,
      description: "Make 100 billion cookies from clicking."
    },
    {
      name: "Clickageddon",
      gfx: require("../../gfx/achievements/clicking/6.png"),
      achieve: false,
      criteria: 10e12,
      description: "Make 10 trillion cookies from clicking."
    },
    {
      name: "Clicknarok",
      gfx: require("../../gfx/achievements/clicking/7.png"),
      achieve: false,
      criteria: 1e15,
      description: "Make 1 quadrillion cookies from clicking."
    },
    {
      name: "Clickastrophe",
      gfx: require("../../gfx/achievements/clicking/8.png"),
      achieve: false,
      criteria: 100e15,
      description: "Make 100 quadrillion cookies from clicking."
    },
    {
      name: "Clickataclysm",
      gfx: require("../../gfx/achievements/clicking/9.png"),
      achieve: false,
      criteria: 10e18,
      description: "Make 10 quintillion cookies from clicking."
    },
    {
      name: "The ultimate clickdown",
      gfx: require("../../gfx/achievements/clicking/10.png"),
      achieve: false,
      criteria: 1e21,
      description: "Make 1 sextillion cookies from clicking."
    },
    {
      name: "All the other kids with the pumped up clicks",
      gfx: require("../../gfx/achievements/clicking/11.png"),
      achieve: false,
      criteria: 100e21,
      description: "Make 100 sextillion cookies from clicking.	"
    },
    {
      name: "One...more...click...",
      gfx: require("../../gfx/achievements/clicking/12.png"),
      achieve: false,
      criteria: 100e21,
      description: "Make 10 septillion cookies from clicking."
    }
  ],
  [
    {
      //alltime cookies
      name: "Wake and bake",
      gfx: require("../../gfx/achievements/allTimeCookies/1.png"),
      achieve: false,
      criteria: 1,
      description: "Bake 1 cookie in one ascension."
    },
    {
      name: "Making some dough",
      gfx: require("../../gfx/achievements/allTimeCookies/2.png"),
      achieve: false,
      criteria: 1000,
      description: "Bake 1,000 cookies in one ascension."
    },
    {
      name: "So baked right now",
      gfx: require("../../gfx/achievements/allTimeCookies/3.png"),
      achieve: false,
      criteria: 100000,
      description: "Bake 100,000 cookies in one ascension."
    },
    {
      name: "Fledgling bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/4.png"),
      achieve: false,
      criteria: 1e6,
      description: "Bake 1 million cookies in one ascension."
    },
    {
      name: "Affluent bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/5.png"),
      achieve: false,
      criteria: 100e6,
      description: "Bake 100 million cookies in one ascension."
    },
    {
      name: "World-famous bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/6.png"),
      achieve: false,
      criteria: 1e9,
      description: "Bake 1 billion cookies in one ascension.	"
    },
    {
      name: "Cosmic bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/7.png"),
      achieve: false,
      criteria: 100e9,
      description: "Bake 100 billion cookies in one ascension.	"
    },
    {
      name: "Galactic bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/8.png"),
      achieve: false,
      criteria: 1e12,
      description: "Bake 1 trillion cookies in one ascension."
    },
    {
      name: "Universal bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/9.png"),
      achieve: false,
      criteria: 100e12,
      description: "Bake 100 trillion cookies in one ascension."
    },
    {
      name: "Timeless bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/10.png"),
      achieve: false,
      criteria: 1e15,
      description: "Bake 1 quadrillion cookies in one ascension."
    },
    {
      name: "Infinite bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/11.png"),
      achieve: false,
      criteria: 100e15,
      description: "Bake 100 quadrillion cookies in one ascension.	"
    },
    {
      name: "Immortal bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/12.png"),
      achieve: false,
      criteria: 1e18,
      description: "Bake 1 quintillion cookies in one ascension."
    },
    {
      name: "Don't stop me now",
      gfx: require("../../gfx/achievements/allTimeCookies/13.png"),
      achieve: false,
      criteria: 100e18,
      description: "Bake 100 quintillion cookies in one ascension."
    },
    {
      name: "You can stop now	",
      gfx: require("../../gfx/achievements/allTimeCookies/14.png"),
      achieve: false,
      criteria: 1e21,
      description: "Bake 1 sextillion cookies in one ascension.	"
    },
    {
      name: "Cookies all the way down",
      gfx: require("../../gfx/achievements/allTimeCookies/15.png"),
      achieve: false,
      criteria: 100e21,
      description: "Bake 100 sextillion cookies in one ascension."
    },
    {
      name: "Overdose",
      gfx: require("../../gfx/achievements/allTimeCookies/16.png"),
      achieve: false,
      criteria: 1e24,
      description: "Bake 1 septillion cookies in one ascension.	"
    },
    {
      name: "How?",
      gfx: require("../../gfx/achievements/allTimeCookies/17.png"),
      achieve: false,
      criteria: 100e24,
      description: "Bake 100 septillion cookies in one ascension."
    },
    {
      name: "The land of milk and cookies",
      gfx: require("../../gfx/achievements/allTimeCookies/18.png"),
      achieve: false,
      criteria: 1e27,
      description: "Bake 1 octillion cookies in one ascension."
    },
    {
      name: "He who controls the cookies controls the universe",
      gfx: require("../../gfx/achievements/allTimeCookies/19.png"),
      achieve: false,
      criteria: 100e27,
      description:
        "Bake 100 octillion cookies in one ascension.'The milk must flow!'"
    },
    {
      name: "Tonight on Hoarders",
      gfx: require("../../gfx/achievements/allTimeCookies/20.png"),
      achieve: false,
      criteria: 1e30,
      description: "Bake 1 nonillion cookies in one ascension."
    },
    {
      name: "Are you gonna eat all that?	",
      gfx: require("../../gfx/achievements/allTimeCookies/21.png"),
      achieve: false,
      criteria: 100e30,
      description: "Bake 100 nonillion cookies in one ascension."
    },
    {
      name: "We're gonna need a bigger bakery",
      gfx: require("../../gfx/achievements/allTimeCookies/22.png"),
      achieve: false,
      criteria: 1e33,
      description: "Bake 1 decillion cookies in one ascension."
    },
    {
      name: "In the mouth of madness	",
      gfx: require("../../gfx/achievements/allTimeCookies/23.png"),
      achieve: false,
      criteria: 100e33,
      description: "Bake 100 decillion cookies in one ascension."
    },
    {
      name: "Brought to you by the letter",
      gfx: require("../../gfx/achievements/allTimeCookies/24.png"),
      achieve: false,
      criteria: 1e36,
      description: "Bake 1 undecillion cookies in one ascension."
    },
    {
      name: "The dreams in which I'm baking are the best I've ever had",
      gfx: require("../../gfx/achievements/allTimeCookies/25.png"),
      achieve: false,
      criteria: 100e36,
      description: "Bake 100 undecillion cookies in one ascension."
    },
    {
      name: "Set for life",
      gfx: require("../../gfx/achievements/allTimeCookies/26.png"),
      achieve: false,
      criteria: 1e39,
      description: "Bake 1 duodecillion cookies in one ascension."
    },
    {
      name: "Panic! at Nabisco",
      gfx: require("../../gfx/achievements/allTimeCookies/27.png"),
      achieve: false,
      criteria: 100e39,
      description: "Bake 100 duodecillion cookies in one ascension."
    },
    {
      name: "Bursting at the seams",
      gfx: require("../../gfx/achievements/allTimeCookies/28.png"),
      achieve: false,
      criteria: 1e42,
      description: "Bake 1 tredecillion cookies in one ascension."
    },
    {
      name: "Just about full",
      gfx: require("../../gfx/achievements/allTimeCookies/29.png"),
      achieve: false,
      criteria: 100e42,
      description: "Bake 100 tredecillion cookies in one ascension.	"
    },
    {
      name: "Hungry for more",
      gfx: require("../../gfx/achievements/allTimeCookies/30.png"),
      achieve: false,
      criteria: 1e45,
      description: "Bake 1 quattuordecillion cookies in one ascension."
    },
    {
      name: "Feed me, ProPanek",
      gfx: require("../../gfx/achievements/allTimeCookies/31.png"),
      achieve: false,
      criteria: 100e45,
      description: "Bake 100 quattuordecillion cookies in one ascension."
    },
    {
      name: "And then what?",
      gfx: require("../../gfx/achievements/allTimeCookies/32.png"),
      achieve: false,
      criteria: 1e48,
      description: "Bake 1 quindecillion cookies in one ascension."
    }
  ],
  [
    {
      // cookies per second
      name: "Casual baking",
      achieve: false,
      criteria: 1,
      description: "Bake 1 cookie per second."
    },
    {
      name: "Hardcore baking",
      achieve: false,
      criteria: 10,
      description: "Bake 10 cookies per second."
    },
    {
      name: "Steady tasty stream",
      achieve: false,
      criteria: 100,
      description: "Bake 100 cookies per second."
    },
    {
      name: "Cookie monster",
      achieve: false,
      criteria: 1000,
      description: "Bake 1,000 cookies per second."
    },
    {
      name: "Mass producer",
      achieve: false,
      criteria: 10000,
      description: "Bake 10,000 cookies per second."
    },
    {
      name: "Cookie vortex",
      achieve: false,
      criteria: 1e6,
      description: "Bake 1 million cookies per second."
    },
    {
      name: "Cookie pulsar",
      achieve: false,
      criteria: 10e6,
      description: "Bake 10 million cookies per second."
    },
    {
      name: "Cookie quasar",
      achieve: false,
      criteria: 100e6,
      description: "Bake 100 million cookies per second."
    },
    {
      name: "Oh hey, you're still here",
      achieve: false,
      criteria: 1e9,
      description: "Bake 1 billion cookies per second."
    },
    {
      name: "Let's never bake again",
      achieve: false,
      criteria: 10e9,
      description: "Bake 10 billion cookies per second.	"
    },
    {
      name: "A world filled with cookies",
      achieve: false,
      criteria: 1e12,
      description: "Bake 1 trillion cookies per second.	"
    },
    {
      name: "When this baby hits 36 quadrillion cookies per hour",
      achieve: false,
      criteria: 10e12,
      description: "Bake 10 trillion cookies per second.	"
    },
    {
      name: "Fast and delicious	",
      achieve: false,
      criteria: 100e12,
      description: "Bake 100 trillion cookies per second."
    },
    {
      name: "Cookiehertz : a really, really tasty hertz	",
      achieve: false,
      criteria: 1e15,
      description: "Bake 1 quadrillion cookies per second."
    },
    {
      name: "Woops, you solved world hunger",
      achieve: false,
      criteria: 10e15,
      description: "Bake 10 quadrillion cookies per second.	"
    },
    {
      name: "Turbopuns",
      achieve: false,
      criteria: 1e18,
      description:
        "Bake 1 quintillion cookies per second. 'Mother Nature will be like 'slowwwww dowwwwwn''"
    },
    {
      name: "Faster menner",
      achieve: false,
      criteria: 10e18,
      description: "Bake 10 quintillion cookies per second."
    },
    {
      name: "And yet you're still hungry	",
      achieve: false,
      criteria: 100e18,
      description: "Bake 100 quintillion cookies per second.	"
    },
    {
      name: "The Abakening",
      achieve: false,
      criteria: 1e21,
      description: "Bake 1 sextillion cookies per second."
    },
    {
      name:
        "There's really no hard limit to how long these achievement names can be and to be quite honest I'm rather curious to see how far we can go. Adolphus W. Green (1844–1917) started as the Principal of the Groton School in 1864. By 1865, he became second assistant librarian at the New York Mercantile Library; from 1867 to 1869, he was promoted to full librarian. From 1869 to 1873, he worked for Evarts, Southmayd & Choate, a law firm co-founded by William M. Evarts, Charles Ferdinand Southmayd and Joseph Hodges Choate. He was admitted to the New York State Bar Association in 1873. Anyway, how's your day been?",
      achieve: false,
      criteria: 10e21,
      description: "Bake 10 sextillion cookies per second."
    },
    {
      name: "Fast",
      achieve: false,
      criteria: 1e24,
      description: "Bake 1 septillion cookies per second"
    },
    {
      name: "Knead for speed",
      achieve: false,
      criteria: 10e24,
      description:
        "Bake 10 septillion cookies per second.'How did we not make that one yet?'"
    },
    {
      name: "Well the cookies start coming and they don't stop coming",
      achieve: false,
      criteria: 100e24,
      description:
        "Bake 100 septillion cookies per second.'Didn't make sense not to click for fun.'"
    },
    {
      name:
        "I don't know if you've noticed but all these icons are very slightly off-center",
      achieve: false,
      criteria: 1e27,
      description: "Bake 1 octillion cookies per second.	"
    },
    {
      name: "The proof of the cookie is in the baking",
      achieve: false,
      criteria: 10e27,
      description:
        "Bake 10 octillion cookies per second. 'How can you have any cookies if you don't bake your dough?'"
    },
    {
      name: "If it's worth doing, it's worth overdoing",
      achieve: false,
      criteria: 1e30,
      description: "Bake 1 nonillion cookies per second."
    },
    {
      name: "Running with scissors",
      achieve: false,
      criteria: 10e30,
      description: "Bake 10 nonillion cookies per second."
    },
    {
      name: "Rarefied air	",
      achieve: false,
      criteria: 100e30,
      description: "Bake 100 nonillion cookies per second."
    },
    {
      name: "Push it to the limit	",
      achieve: false,
      criteria: 1e33,
      description: "Bake 1 decillion cookies per second."
    },
    {
      name: "Green cookies sleep furiously",
      achieve: false,
      criteria: 10e33,
      description: "Bake 10 decillion cookies per second.	"
    },
    {
      name: "Leisurely pace",
      achieve: false,
      criteria: 1e36,
      description: "Bake 1 undecillion cookies per second."
    },
    {
      name: "Hypersonic",
      achieve: false,
      criteria: 10e36,
      description: "Bake 10 undecillion cookies per second.	"
    }
  ],
  [
    {
      // levels
      name: "Cursor!",
      gfx: require("../../gfx/upgrades/Cursor.png"),
      achieve: false,
      criteria: 1,
      description: "You can buy Cursors!"
    },
    {
      name: "Grandma!",
      gfx: require("../../gfx/upgrades/Grandmas.gif"),
      achieve: false,
      criteria: 2,
      description: "You can buy Grandmas!"
    },
    {
      name: "Farm!",
      gfx: require("../../gfx/upgrades/Farm.png"),
      achieve: false,
      criteria: 3,
      description: "You can buy Farms!"
    },
    {
      name: "Mine!",
      gfx: require("../../gfx/upgrades/Mine.png"),
      achieve: false,
      criteria: 4,
      description: "You can buy Mines!"
    },
    {
      name: "Factory!",
      gfx: require("../../gfx/upgrades/Factory.png"),
      achieve: false,
      criteria: 5,
      description: "You can buy Factories!"
    },
    {
      name: "Bank!",
      gfx: require("../../gfx/upgrades/Bank.png"),
      achieve: false,
      criteria: 6,
      description: "You can buy Banks!"
    },
    {
      name: "Temple!",
      gfx: require("../../gfx/upgrades/Temple.png"),
      achieve: false,
      criteria: 7,
      description: "You can buy Temples!"
    },
    {
      name: "Wizard Tower!",
      gfx: require("../../gfx/upgrades/Wizardtower.png"),
      achieve: false,
      criteria: 8,
      description: "You can buy Wizard Towers!"
    },
    {
      name: "Shipment!",
      gfx: require("../../gfx/upgrades/Shipment.png"),
      achieve: false,
      criteria: 9,
      description: "You can buy Shipments!"
    },
    {
      name: "Alchemy Lab!",
      gfx: require("../../gfx/upgrades/Alchemylab.png"),
      achieve: false,
      criteria: 10,
      description: "You can buy Alchemy Labs!"
    },
    {
      name: "Portal!",
      gfx: require("../../gfx/upgrades/Portal.png"),
      achieve: false,
      criteria: 11,
      description: "You can buy Portals!"
    },
    {
      name: "Time Machine!",
      gfx: require("../../gfx/upgrades/Timemachine.png"),
      achieve: false,
      criteria: 12,
      description: "You can buy Time Machines!"
    },
    {
      name: "Antimatter Condenser!",
      gfx: require("../../gfx/upgrades/Antim.png"),
      achieve: false,
      criteria: 13,
      description: "You can buy Antimatter Condensers!"
    },
    {
      name: "Prism!",
      gfx: require("../../gfx/upgrades/Prism.png"),
      achieve: false,
      criteria: 14,
      description: "You can buy Prisms!"
    },
    {
      name: "Chancemaker!",
      gfx: require("../../gfx/upgrades/Chancemaker.png"),
      achieve: false,
      criteria: 15,
      description: "You can buy Chancemakers!"
    }
  ],
  [
    {
      // upgrades amount
      name: "more Cursors!",
      criteria: 1,
      level: 0,
      description: "Have 1 cursor!"
    },
    {
      name: "more Grandmas!",
      criteria: 1,
      level: 0,
      description: "Have 1 grandma!"
    },
    {
      name: "more Farms!",
      criteria: 1,
      level: 0,
      description: "Have 1 Farm!"
    },
    {
      name: "more Mines!",
      criteria: 1,
      level: 0,
      description: "Have 1 Mine!"
    },
    {
      name: "more Factories!",
      criteria: 1,
      level: 0,
      description: "Have 1 Factory!"
    },
    {
      name: "more Banks!",
      criteria: 1,
      level: 0,
      description: "Have 1 Bank!"
    },
    {
      name: "more Temples!",
      criteria: 1,
      level: 0,
      description: "Have 1 Temple!"
    },
    {
      name: "more Wizard Towers!",
      criteria: 1,
      level: 0,
      description: "Have 1 Wizard Tower!"
    },
    {
      name: "more Shipments!",
      criteria: 1,
      level: 0,
      description: "Have 1 Shipment!"
    },
    {
      name: "more Alchemy Labs!",
      criteria: 1,
      level: 0,
      description: "Have 1 Alchemy Lab!"
    },
    {
      name: "more Portals!",
      criteria: 1,
      level: 0,
      description: "Have 1 Portal!"
    },
    {
      name: "more Time Machines!",
      criteria: 1,
      level: 0,
      description: "Have 1 Time Machine!"
    },
    {
      name: "more Antimatter Condensers!",
      criteria: 1,
      level: 0,
      description: "Have 1 Antimatter Condenser!"
    },
    {
      name: "more Prisms!",
      criteria: 1,
      level: 0,
      description: "Have 1 Prism!"
    },
    {
      name: "more Chancemakers!",
      criteria: 1,
      level: 0,
      description: "Have 1 Chancemaker!"
    }
  ]
];

export default achievements;
