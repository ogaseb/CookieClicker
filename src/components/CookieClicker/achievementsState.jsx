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
      // name: "more Cursors!",
      name: [
        "Click",
        "Double-click",
        "Mouse wheel",
        "Of Mice and Men",
        "The Digital",
        "Extreme polydactyly",
        "Dr. T",
        "Thumbs, phalanges, metacarpals",
        "With her finger and her thumb",
        "Click delegator",
        "Finger clickin' good"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 cursor!"
    },
    {
      name: [
        "Grandma's cookies",
        "Sloppy kisses",
        "Retirement home",
        "Friend of the ancients",
        "Ruler of the ancients",
        "The old never bothered me anyway",
        "The agemaster",
        "To oldly go",
        "Aged well",
        "101st birthday",
        "Defense of the ancients"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 grandma!"
    },
    {
      name: [
        "My first farm",
        "Reap what you sow",
        "Farm ill",
        "Perfected agriculture",
        "Homegrown",
        "Gardener extraordinaire",
        "Seedy business",
        " You and the beanstalk",
        "Harvest moon",
        "Make like a tree",
        "Sharpest tool in the shed"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Farm!"
    },
    {
      name: [
        "You know the drill",
        "Excavation site",
        "Hollow the planet",
        "Can you dig it",
        "Center of the Earth",
        "Tectonic ambassador",
        "Freak fracking",
        "Romancing the stone",
        "Mine?",
        "Cave story",
        "Hey now, you're a rock"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Mine!"
    },
    {
      name: [
        "Production chain",
        "Industrial revolution",
        "Global warming",
        "Ultimate automation",
        "Technocracy",
        "Rise of the machines",
        "Modern times",
        "Ex machina",
        "In full gear",
        "In-cog-neato",
        "Break the mold"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Factory!"
    },
    {
      name: [
        "Pretty penny",
        "Fit the bill",
        "A loan in the dark",
        "Need for greed",
        "It's the economy, stupid",
        "Acquire currency",
        "The nerve of war",
        "And I need it now",
        "Treacle tart economics",
        "Save your breath because that's all you've got left",
        "Get the show on, get paid"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Bank!"
    },
    {
      name: [
        "Your time to shrine",
        "Shady sect",
        "New-age cult",
        "Organized religion",
        "Fanaticism",
        "Zealotry",
        "Wololo",
        "Pray on the weak",
        "Holy cookies, grandma!",
        "Vengeful and almighty",
        "My world's on fire, how about yours"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Temple!"
    },
    {
      name: [
        "Bewitched",
        "The sorcerer's apprentice",
        "Charms and enchantments",
        "Curses and maledictions",
        "Magic kingdom",
        "The wizarding world",
        "And now for my next trick, I'll need a volunteer from the audience",
        "It's a kind of magic",
        "The Prestige",
        "Spell it out for you",
        "The meteor men beg to differ"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Wizard Tower!"
    },
    {
      name: [
        "Expedition",
        "Galactic highway",
        "Far far away",
        "Type II civilization",
        "We come in peace",
        "Parsec-masher",
        "It's not delivery",
        "Make it so",
        "That's just peanuts to space",
        "Space space space space space",
        "Only shooting stars"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Shipment!"
    },
    {
      name: [
        "Transmutation",
        "Transmogrification",
        "Gold member",
        "Gild wars",
        "The secrets of the universe",
        "The work of a lifetime",
        "Gold, Jerry! Gold!",
        "All that glitters is gold",
        "Worth its weight in lead",
        "Don't get used to yourself, you're gonna have to change",
        "We could all use a little change"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Alchemy Lab!"
    },
    {
      name: [
        "A whole new world",
        "Now you're thinking",
        "Dimensional shift",
        "Brain-split",
        "Realm of the Mad God",
        "A place lost in time",
        "Forbidden zone",
        "H̸̷͓̳̳̯̟͕̟͍͍̣͡ḛ̢̦̰̺̮̝͖͖̘̪͉͘͡ ̠̦͕̤̪̝̥̰̠̫̖̣͙̬͘ͅC̨̦̺̩̲̥͉̭͚̜̻̝̣̼͙̮̯̪o̴̡͇̘͎̞̲͇̦̲͞͡m̸̩̺̝̣̹̱͚̬̥̫̳̼̞̘̯͘ͅẹ͇̺̜́̕͢s̶̙̟̱̥̮̯̰̦͓͇͖͖̝͘͘͞",
        "What happens in the vortex stays in the vortex",
        "Objects in the mirror dimension are closer than they appear",
        "Your brain gets smart but your head gets dumb"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Portal!"
    },
    {
      name: [
        "Time warp",
        "Alternate timeline",
        "Rewriting history",
        "Time duke",
        "Forever and ever",
        "Heat death",
        "cookie clicker forever and forever a hundred years cookie clicker, all day long forever, forever a hundred    times, over and over cookie clicker adventures dot com",
        "Way back then",
        "Invited to yesterday's party",
        "Groundhog day",
        "The years start coming"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Time Machine!"
    },
    {
      name: [
        "Antibatter",
        "Quirky quarks",
        "It does matter!",
        "Molecular maestro",
        "Walk the planck",
        "Microcosm",
        "Scientists baffled everywhere",
        "Exotic matter",
        "Downsizing",
        "A matter of perspective",
        "What a concept"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Antimatter Condenser!"
    },
    {
      name: [
        "Lone photon",
        "Dazzling glimmer",
        "Blinding flash",
        "Unending glow",
        "Rise and shine",
        "Bright future",
        "Harmony of the spheres",
        "At the end of the tunnel",
        "My eyes",
        "Optical illusion",
        "You'll never shine if you don't glow"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Prism!"
    },
    {
      name: [
        "Lucked out",
        "What are the odds",
        "Grandma needs a new pair of shoes",
        "Million to one shot, doc",
        "As luck would have it",
        "Ever in your favor",
        "Be a lady",
        "Dicey business",
        "Maybe a chance in hell, actually",
        "Jackpot",
        "You'll never know if you don't go"
      ],
      criteria: 1,
      level: 0,
      description: "Have 1 Chancemaker!"
    }
  ]
];

export default achievements;
