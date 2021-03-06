
// Standard
declare var OK: 0;
declare var ERR_NOT_OWNER: -1;
declare var ERR_NO_PATH: -2;
declare var ERR_NAME_EXISTS: -3;
declare var ERR_BUSY: -4;
declare var ERR_NOT_FOUND: -5;
declare var ERR_NOT_ENOUGH_ENERGY: -6;
declare var ERR_NOT_ENOUGH_RESOURCES: -6;
declare var ERR_INVALID_TARGET: -7;
declare var ERR_FULL: -8;
declare var ERR_NOT_IN_RANGE: -9;
declare var ERR_INVALID_ARGS: -10;
declare var ERR_TIRED: -11;
declare var ERR_NO_BODYPART: -12;
declare var ERR_NOT_ENOUGH_EXTENSIONS: -6;
declare var ERR_RCL_NOT_ENOUGH: -14;
declare var ERR_GCL_NOT_ENOUGH: -15;

declare var FIND_EXIT_TOP: 1;
declare var FIND_EXIT_RIGHT: 3;
declare var FIND_EXIT_BOTTOM: 5;
declare var FIND_EXIT_LEFT: 7;
declare var FIND_EXIT: 10;
declare var FIND_CREEPS: 101;
declare var FIND_MY_CREEPS: 102;
declare var FIND_HOSTILE_CREEPS: 103;
declare var FIND_SOURCES_ACTIVE: 104;
declare var FIND_SOURCES: 105;
declare var FIND_DROPPED_ENERGY: 106;
declare var FIND_DROPPED_RESOURCES: 106;
declare var FIND_STRUCTURES: 107;
declare var FIND_MY_STRUCTURES: 108;
declare var FIND_HOSTILE_STRUCTURES: 109;
declare var FIND_FLAGS: 110;
declare var FIND_CONSTRUCTION_SITES: 111;
declare var FIND_MY_SPAWNS: 112;
declare var FIND_HOSTILE_SPAWNS: 113;
declare var FIND_MY_CONSTRUCTION_SITES: 114;
declare var FIND_HOSTILE_CONSTRUCTION_SITES: 115;
declare var FIND_MINERALS: 116;
declare var FIND_NUKES: 117;

declare var TOP: 1;
declare var TOP_RIGHT: 2;
declare var RIGHT: 3;
declare var BOTTOM_RIGHT: 4;
declare var BOTTOM: 5;
declare var BOTTOM_LEFT: 6;
declare var LEFT: 7;
declare var TOP_LEFT: 8;

declare var COLOR_RED: 1;
declare var COLOR_PURPLE: 2;
declare var COLOR_BLUE: 3;
declare var COLOR_CYAN: 4;
declare var COLOR_GREEN: 5;
declare var COLOR_YELLOW: 6;
declare var COLOR_ORANGE: 7;
declare var COLOR_BROWN: 8;
declare var COLOR_GREY: 9;
declare var COLOR_WHITE: 10;

declare type COLOR_TYPE = number;

declare var LOOK_CREEPS: "creep";
declare var LOOK_ENERGY: "energy";
declare var LOOK_RESOURCES: "resource";
declare var LOOK_SOURCES: "source";
declare var LOOK_MINERALS: "mineral";
declare var LOOK_STRUCTURES: "structure";
declare var LOOK_FLAGS: "flag";
declare var LOOK_CONSTRUCTION_SITES: "constructionSite";
declare var LOOK_NUKES: "nuke";
declare var LOOK_TERRAIN: "terrain";

declare var OBSTACLE_OBJECT_TYPES: ["spawn", "creep", "wall", "source", "constructedWall", "extension", "link", "storage", "tower", "observer", "powerSpawn", "powerBank", "lab", "terminal","nuker"];

declare type MOVE_TYPE = "move";
declare type WORK_TYPE = "work";
declare type CARRY_TYPE = "carry";
declare type ATTACK_TYPE = "attack";
declare type RANGED_ATTACK_TYPE = "ranged_attack";
declare type TOUGH_TYPE = "tough";
declare type HEAL_TYPE = "heal";
declare type CLAIM_TYPE = "claim";

declare type BODYPART_TYPE =
    MOVE_TYPE |
    WORK_TYPE |
    CARRY_TYPE |
    ATTACK_TYPE |
    RANGED_ATTACK_TYPE |
    TOUGH_TYPE |
    HEAL_TYPE |
    CLAIM_TYPE
;

declare var MOVE: MOVE_TYPE;
declare var WORK: WORK_TYPE;
declare var CARRY: CARRY_TYPE;
declare var ATTACK: ATTACK_TYPE;
declare var RANGED_ATTACK: RANGED_ATTACK_TYPE;
declare var TOUGH: TOUGH_TYPE;
declare var HEAL: HEAL_TYPE;
declare var CLAIM: CLAIM_TYPE;

declare var BODYPART_COST: {
    "move": 50,
    "work": 100,
    "attack": 80,
    "carry": 50,
    "heal": 250,
    "ranged_attack": 150,
    "tough": 10,
    "claim": 600
};

declare var WORLD_WIDTH: 162;
declare var WORLD_HEIGHT: 162;

declare var CREEP_LIFE_TIME: 1500;
declare var CREEP_CLAIM_LIFE_TIME: 500;
declare var CREEP_CORPSE_RATE: 0.2;

declare var CARRY_CAPACITY: 50;
declare var HARVEST_POWER: 2;
declare var HARVEST_MINERAL_POWER: 1;
declare var REPAIR_POWER: 100;
declare var DISMANTLE_POWER: 50;
declare var BUILD_POWER: 5;
declare var ATTACK_POWER: 30;
declare var UPGRADE_CONTROLLER_POWER: 1;
declare var RANGED_ATTACK_POWER: 10;
declare var HEAL_POWER: 12;
declare var RANGED_HEAL_POWER: 4;
declare var REPAIR_COST: 0.01;
declare var DISMANTLE_COST: 0.005;

declare var RAMPART_DECAY_AMOUNT: 300;
declare var RAMPART_DECAY_TIME: 100;
declare var RAMPART_HITS: 1;
declare var RAMPART_HITS_MAX: {"2": 300000, "3": 1000000, "4": 3000000, "5": 10000000, "6": 30000000, "7": 100000000, "8": 300000000};

declare var ENERGY_REGEN_TIME: 300;
declare var ENERGY_DECAY: 1000;

declare var SPAWN_HITS: 5000;
declare var SPAWN_ENERGY_START: 300;
declare var SPAWN_ENERGY_CAPACITY: 300;
declare var CREEP_SPAWN_TIME: 3;
declare var SPAWN_RENEW_RATIO: 1.2;

declare var SOURCE_ENERGY_CAPACITY: 3000;
declare var SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare var SOURCE_ENERGY_KEEPER_CAPACITY: 4000;

declare var WALL_HITS: 1;
declare var WALL_HITS_MAX: 300000000;

declare var EXTENSION_HITS: 1000;
declare var EXTENSION_ENERGY_CAPACITY: {"0": 50, "1": 50, "2": 50, "3": 50, "4": 50, "5": 50, "6": 50, "7": 100, "8": 200};

declare var ROAD_HITS: 5000;
declare var ROAD_WEAROUT: 1;
declare var ROAD_DECAY_AMOUNT: 100;
declare var ROAD_DECAY_TIME: 1000;

declare var LINK_HITS: 1000;
declare var LINK_HITS_MAX: 1000;
declare var LINK_CAPACITY: 800;
declare var LINK_COOLDOWN: 1;
declare var LINK_LOSS_RATIO: 0.03;

declare var STORAGE_CAPACITY: 1000000;
declare var STORAGE_HITS: 10000;

declare var STRUCTURE_SPAWN: "spawn";
declare var STRUCTURE_EXTENSION: "extension";
declare var STRUCTURE_ROAD: "road";
declare var STRUCTURE_WALL: "constructedWall";
declare var STRUCTURE_RAMPART: "rampart";
declare var STRUCTURE_KEEPER_LAIR: "keeperLair";
declare var STRUCTURE_PORTAL: "portal";
declare var STRUCTURE_CONTROLLER: "controller";
declare var STRUCTURE_LINK: "link";
declare var STRUCTURE_STORAGE: "storage";
declare var STRUCTURE_TOWER: "tower";
declare var STRUCTURE_OBSERVER: "observer";
declare var STRUCTURE_POWER_BANK: "powerBank";
declare var STRUCTURE_POWER_SPAWN: "powerSpawn";
declare var STRUCTURE_EXTRACTOR: "extractor";
declare var STRUCTURE_LAB: "lab";
declare var STRUCTURE_TERMINAL: "terminal";
declare var STRUCTURE_CONTAINER: "container";
declare var STRUCTURE_NUKER: "nuker";

declare var CONSTRUCTION_COST: {
    "spawn": 15000,
    "extension": 3000,
    "road": 300,
    "constructedWall": 1,
    "rampart": 1,
    "link": 5000,
    "storage": 30000,
    "tower": 5000,
    "observer": 8000,
    "powerSpawn": 100000,
    "extractor": 5000,
    "lab": 50000,
    "terminal": 100000,
    "container": 5000,
    "nuker": 100000
};
declare var CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;

declare var CONTROLLER_LEVELS: {"1": 200; "2": 45000; "3": 135000; "4": 405000; "5": 1215000; "6": 3645000; "7": 10935000};
// declare var CONTROLLER_STRUCTURES: {
//     "spawn": {"0": 0, "1": 1, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "7": 2, "8": 3},
//     "extension": {"0": 0, "1": 0, "2": 5, "3": 10, "4": 20, "5": 30, "6": 40, "7": 50, "8": 60},
//     "link": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 2, "6": 3, "7": 4, "8": 6},
//     "road": {"0": 2500, "1": 2500, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500},
//     "constructedWall": {"1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500},
//     "rampart": {"1": 0, "2": 2500, "3": 2500, "4": 2500, "5": 2500, "6": 2500, "7": 2500, "8": 2500},
//     "storage": {"1": 0, "2": 0, "3": 0, "4": 1, "5": 1, "6": 1, "7": 1, "8": 1},
//     "tower": {"1": 0, "2": 0, "3": 1, "4": 1, "5": 2, "6": 2, "7": 3, "8": 6},
//     "observer": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1},
//     "powerSpawn": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1},
//     "extractor": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1},
//     "terminal": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 1, "7": 1, "8": 1},
//     "lab": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 3, "7": 6, "8": 10},
//     "container": {"0": 5, "1": 5, "2": 5, "3": 5, "4": 5, "5": 5, "6": 5, "7": 5, "8": 5},
//     "nuker": {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0, "6": 0, "7": 0, "8": 1}
// };
declare var CONTROLLER_DOWNGRADE: {"1": 20000, "2": 5000, "3": 10000, "4": 20000, "5": 40000, "6": 60000, "7": 100000, "8": 150000};
declare var CONTROLLER_CLAIM_DOWNGRADE: 0.2;
declare var CONTROLLER_RESERVE: 1;
declare var CONTROLLER_RESERVE_MAX: 5000;
declare var CONTROLLER_MAX_UPGRADE_PER_TICK: 15;
declare var CONTROLLER_ATTACK_BLOCKED_UPGRADE: 1000;
declare var CONTROLLER_NUKE_BLOCKED_UPGRADE: 200;

declare var SAFE_MODE_DURATION: 20000;
declare var SAFE_MODE_COOLDOWN: 50000;
declare var SAFE_MODE_COST: 1000;

declare var TOWER_HITS: 3000;
declare var TOWER_CAPACITY: 1000;
declare var TOWER_ENERGY_COST: 10;
declare var TOWER_POWER_ATTACK: 600;
declare var TOWER_POWER_HEAL: 400;
declare var TOWER_POWER_REPAIR: 800;
declare var TOWER_OPTIMAL_RANGE: 5;
declare var TOWER_FALLOFF_RANGE: 20;
declare var TOWER_FALLOFF: 0.75;

declare var OBSERVER_HITS: 500;
declare var OBSERVER_RANGE: 10;

declare var POWER_BANK_HITS: 2000000;
declare var POWER_BANK_CAPACITY_MAX: 5000;
declare var POWER_BANK_CAPACITY_MIN: 500;
declare var POWER_BANK_CAPACITY_CRIT: 0.3;
declare var POWER_BANK_DECAY: 5000;
declare var POWER_BANK_HIT_BACK: 0.5;

declare var POWER_SPAWN_HITS: 5000;
declare var POWER_SPAWN_ENERGY_CAPACITY: 5000;
declare var POWER_SPAWN_POWER_CAPACITY: 100;
declare var POWER_SPAWN_ENERGY_RATIO: 50;

declare var EXTRACTOR_HITS: 500;
declare var EXTRACTOR_COOLDOWN: 5;

declare var LAB_HITS: 500;
declare var LAB_MINERAL_CAPACITY: 3000;
declare var LAB_ENERGY_CAPACITY: 2000;
declare var LAB_BOOST_ENERGY: 20;
declare var LAB_BOOST_MINERAL: 30;
declare var LAB_COOLDOWN: 10;
declare var LAB_REACTION_AMOUNT: 5;

declare var GCL_POW: 2.4;
declare var GCL_MULTIPLY: 1000000;
declare var GCL_NOVICE: 3;

declare var MODE_SIMULATION: "simulation";
declare var MODE_SURVIVAL: "survival";
declare var MODE_WORLD: "world";
declare var MODE_ARENA: "arena";

declare type TERRAIN_MASK_WALL_TYPE = 1;
declare type TERRAIN_MASK_SWAMP_TYPE = 2;
declare type  TERRAIN_MASK_LAVA_TYPE = 4;

declare var TERRAIN_MASK_WALL: TERRAIN_MASK_WALL_TYPE;
declare var TERRAIN_MASK_SWAMP: TERRAIN_MASK_SWAMP_TYPE;
declare var TERRAIN_MASK_LAVA: TERRAIN_MASK_LAVA_TYPE;

declare var MAX_CONSTRUCTION_SITES: 100;
declare var MAX_CREEP_SIZE: 50;

declare var MINERAL_REGEN_TIME: 50000;
declare var MINERAL_MIN_AMOUNT: {
    "H": 35000,
    "O": 35000,
    "L": 35000,
    "K": 35000,
    "Z": 35000,
    "U": 35000,
    "X": 35000
};
declare var MINERAL_RANDOM_FACTOR: 2;

declare var MINERAL_DENSITY: {
    "1": 15000,
    "2": 35000,
    "3": 70000,
    "4": 100000
};
declare var MINERAL_DENSITY_PROBABILITY  : {
    "1": 0.1,
    "2": 0.5,
    "3": 0.9,
    "4": 1.0
};
declare var MINERAL_DENSITY_CHANGE: 0.05;

declare var DENSITY_LOW: 1;
declare var DENSITY_MODERATE: 2;
declare var DENSITY_HIGH: 3;
declare var DENSITY_ULTRA: 4;

declare var TERMINAL_CAPACITY: 300000;
declare var TERMINAL_HITS: 3000;
declare var TERMINAL_SEND_COST: 0.1;
declare var TERMINAL_MIN_SEND: 100;

declare var CONTAINER_HITS: 250000;
declare var CONTAINER_CAPACITY: 2000;
declare var CONTAINER_DECAY: 5000;
declare var CONTAINER_DECAY_TIME: 100;
declare var CONTAINER_DECAY_TIME_OWNED: 500;

declare var NUKER_HITS: 1000;
declare var NUKER_COOLDOWN: 100000;
declare var NUKER_ENERGY_CAPACITY: 300000;
declare var NUKER_GHODIUM_CAPACITY: 5000;
declare var NUKE_LAND_TIME: 50000;
declare var NUKE_RANGE: 10;
declare var NUKE_DAMAGE: {
    "0": 10000000,
    "2": 5000000
};

declare var PORTAL_DECAY: 30000;

declare var ORDER_SELL: "sell";
declare var ORDER_BUY: "buy";

declare var MARKET_FEE: 0.05;

declare var FLAGS_LIMIT: 10000;

declare var SUBSCRIPTION_TOKEN: "token";

declare var RESOURCE_ENERGY: "energy";
declare var RESOURCE_POWER: "power";

declare var RESOURCE_HYDROGEN: "H";
declare var RESOURCE_OXYGEN: "O";
declare var RESOURCE_UTRIUM: "U";
declare var RESOURCE_LEMERGIUM: "L";
declare var RESOURCE_KEANIUM: "K";
declare var RESOURCE_ZYNTHIUM: "Z";
declare var RESOURCE_CATALYST: "X";
declare var RESOURCE_GHODIUM: "G";

declare var RESOURCE_HYDROXIDE: "OH";
declare var RESOURCE_ZYNTHIUM_KEANITE: "ZK";
declare var RESOURCE_UTRIUM_LEMERGITE: "UL";

declare var RESOURCE_UTRIUM_HYDRIDE: "UH";
declare var RESOURCE_UTRIUM_OXIDE: "UO";
declare var RESOURCE_KEANIUM_HYDRIDE: "KH";
declare var RESOURCE_KEANIUM_OXIDE: "KO";
declare var RESOURCE_LEMERGIUM_HYDRIDE: "LH";
declare var RESOURCE_LEMERGIUM_OXIDE: "LO";
declare var RESOURCE_ZYNTHIUM_HYDRIDE: "ZH";
declare var RESOURCE_ZYNTHIUM_OXIDE: "ZO";
declare var RESOURCE_GHODIUM_HYDRIDE: "GH";
declare var RESOURCE_GHODIUM_OXIDE: "GO";

declare var RESOURCE_UTRIUM_ACID: "UH2O";
declare var RESOURCE_UTRIUM_ALKALIDE: "UHO2";
declare var RESOURCE_KEANIUM_ACID: "KH2O";
declare var RESOURCE_KEANIUM_ALKALIDE: "KHO2";
declare var RESOURCE_LEMERGIUM_ACID: "LH2O";
declare var RESOURCE_LEMERGIUM_ALKALIDE: "LHO2";
declare var RESOURCE_ZYNTHIUM_ACID: "ZH2O";
declare var RESOURCE_ZYNTHIUM_ALKALIDE: "ZHO2";
declare var RESOURCE_GHODIUM_ACID: "GH2O";
declare var RESOURCE_GHODIUM_ALKALIDE: "GHO2";

declare var RESOURCE_CATALYZED_UTRIUM_ACID: "XUH2O";
declare var RESOURCE_CATALYZED_UTRIUM_ALKALIDE: "XUHO2";
declare var RESOURCE_CATALYZED_KEANIUM_ACID: "XKH2O";
declare var RESOURCE_CATALYZED_KEANIUM_ALKALIDE: "XKHO2";
declare var RESOURCE_CATALYZED_LEMERGIUM_ACID: "XLH2O";
declare var RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: "XLHO2";
declare var RESOURCE_CATALYZED_ZYNTHIUM_ACID: "XZH2O";
declare var RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "XZHO2";
declare var RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare var RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";

declare var REACTIONS: {
    H: {
        O: "OH",
        L: "LH",
        K: "KH",
        U: "UH",
        Z: "ZH",
        G: "GH"
    },
    O: {
        H: "OH",
        L: "LO",
        K: "KO",
        U: "UO",
        Z: "ZO",
        G: "GO"
    },
    Z: {
        K: "ZK",
        H: "ZH",
        O: "ZO"
    },
    L: {
        U: "UL",
        H: "LH",
        O: "LO"
    },
    K: {
        Z: "ZK",
        H: "KH",
        O: "KO"
    },
    G: {
        H: "GH",
        O: "GO"
    },
    U: {
        L: "UL",
        H: "UH",
        O: "UO"
    },
    OH: {
        UH: "UH2O",
        UO: "UHO2",
        ZH: "ZH2O",
        ZO: "ZHO2",
        KH: "KH2O",
        KO: "KHO2",
        LH: "LH2O",
        LO: "LHO2",
        GH: "GH2O",
        GO: "GHO2"
    },
    X: {
        UH2O: "XUH2O",
        UHO2: "XUHO2",
        LH2O: "XLH2O",
        LHO2: "XLHO2",
        KH2O: "XKH2O",
        KHO2: "XKHO2",
        ZH2O: "XZH2O",
        ZHO2: "XZHO2",
        GH2O: "XGH2O",
        GHO2: "XGHO2"
    },
    ZK: {
        UL: "G"
    },
    UL: {
        ZK: "G"
    },
    LH: {
        OH: "LH2O"
    },
    ZH: {
        OH: "ZH2O"
    },
    GH: {
        OH: "GH2O"
    },
    KH: {
        OH: "KH2O"
    },
    UH: {
        OH: "UH2O"
    },
    LO: {
        OH: "LHO2"
    },
    ZO: {
        OH: "ZHO2"
    },
    KO: {
        OH: "KHO2"
    },
    UO: {
        OH: "UHO2"
    },
    GO: {
        OH: "GHO2"
    },
    LH2O: {
        X: "XLH2O"
    },
    KH2O: {
        X: "XKH2O"
    },
    ZH2O: {
        X: "XZH2O"
    },
    UH2O: {
        X: "XUH2O"
    },
    GH2O: {
        X: "XGH2O"
    },
    LHO2: {
        X: "XLHO2"
    },
    UHO2: {
        X: "XUHO2"
    },
    KHO2: {
        X: "XKHO2"
    },
    ZHO2: {
        X: "XZHO2"
    },
    GHO2: {
        X: "XGHO2"
    }
};

declare var BOOSTS: {
    work: {
        UO: {
            harvest: 4
        },
        UHO2: {
            harvest: 6
        },
        XUHO2: {
            harvest: 8
        },
        LH: {
            build: 1.5,
            repair: 1.5
        },
        LH2O: {
            build: 1.8,
            repair: 1.8
        },
        XLH2O: {
            build: 2,
            repair: 2
        },
        ZH: {
            dismantle: 2
        },
        ZH2O: {
            dismantle: 3
        },
        XZH2O: {
            dismantle: 4
        },
        GH: {
            upgradeController: 1.5
        },
        GH2O: {
            upgradeController: 1.8
        },
        XGH2O: {
            upgradeController: 2
        }
    },
    attack: {
        UH: {
            attack: 2
        },
        UH2O: {
            attack: 3
        },
        XUH2O: {
            attack: 4
        }
    },
    ranged_attack: {
        KO: {
            rangedAttack: 2,
            rangedMassAttack: 2
        },
        KHO2: {
            rangedAttack: 3,
            rangedMassAttack: 3
        },
        XKHO2: {
            rangedAttack: 4,
            rangedMassAttack: 4
        }
    },
    heal: {
        LO: {
            heal: 2,
            rangedHeal: 2
        },
        LHO2: {
            heal: 3,
            rangedHeal: 3
        },
        XLHO2: {
            heal: 4,
            rangedHeal: 4
        }
    },
    carry: {
        KH: {
            capacity: 2
        },
        KH2O: {
            capacity: 3
        },
        XKH2O: {
            capacity: 4
        }
    },
    move: {
        ZO: {
            fatigue: 2
        },
        ZHO2: {
            fatigue: 3
        },
        XZHO2: {
            fatigue: 4
        }
    },
    tough: {
        GO: {
            damage: .7
        },
        GHO2: {
            damage: .5
        },
        XGHO2: {
            damage: .3
        }
    }
};

declare var PORTAL_UNSTABLE: 864000000;
declare var PORTAL_MIN_TIMEOUT: 1036800000;
declare var PORTAL_MAX_TIMEOUT: 1036800000;

declare var POWER_BANK_RESPAWN_TIME: 50000;

declare var INVADERS_ENERGY_GOAL: 100000;

declare var BODYPARTS_ALL : BODYPART_TYPE[];

declare var RESOURCES_ALL : [
  typeof RESOURCE_ENERGY,
  typeof RESOURCE_POWER,

  // RESOURCE_HYDROGEN,
  // RESOURCE_OXYGEN,
  // RESOURCE_UTRIUM,
  // RESOURCE_KEANIUM,
  // RESOURCE_LEMERGIUM,
  // RESOURCE_ZYNTHIUM,
  // RESOURCE_CATALYST,
  // RESOURCE_GHODIUM,

  // RESOURCE_HYDROXIDE,
  // RESOURCE_ZYNTHIUM_KEANITE,
  // RESOURCE_UTRIUM_LEMERGITE,

  // RESOURCE_UTRIUM_HYDRIDE,
  // RESOURCE_UTRIUM_OXIDE,
  // RESOURCE_KEANIUM_HYDRIDE,
  // RESOURCE_KEANIUM_OXIDE,
  // RESOURCE_LEMERGIUM_HYDRIDE,
  // RESOURCE_LEMERGIUM_OXIDE,
  // RESOURCE_ZYNTHIUM_HYDRIDE,
  // RESOURCE_ZYNTHIUM_OXIDE,
  // RESOURCE_GHODIUM_HYDRIDE,
  // RESOURCE_GHODIUM_OXIDE,

  // RESOURCE_UTRIUM_ACID,
  // RESOURCE_UTRIUM_ALKALIDE,
  // RESOURCE_KEANIUM_ACID,
  // RESOURCE_KEANIUM_ALKALIDE,
  // RESOURCE_LEMERGIUM_ACID,
  // RESOURCE_LEMERGIUM_ALKALIDE,
  // RESOURCE_ZYNTHIUM_ACID,
  // RESOURCE_ZYNTHIUM_ALKALIDE,
  // RESOURCE_GHODIUM_ACID,
  // RESOURCE_GHODIUM_ALKALIDE,

  // RESOURCE_CATALYZED_UTRIUM_ACID,
  // RESOURCE_CATALYZED_UTRIUM_ALKALIDE,
  // RESOURCE_CATALYZED_KEANIUM_ACID,
  // RESOURCE_CATALYZED_KEANIUM_ALKALIDE,
  // RESOURCE_CATALYZED_LEMERGIUM_ACID,
  // RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE,
  // RESOURCE_CATALYZED_ZYNTHIUM_ACID,
  // RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE,
  // RESOURCE_CATALYZED_GHODIUM_ACID,
  // RESOURCE_CATALYZED_GHODIUM_ALKALIDE
];

declare var COLORS_ALL : COLOR_TYPE[];
