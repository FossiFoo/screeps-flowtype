declare type Controller = StructureController;

declare type Extension = StructureExtension;

declare type KeeperLair = StructureKeeperLair;

declare type Lab = StructureLab;

declare type Link = StructureLink;

declare type Observer = StructureObserver;

declare type PowerBank = StructurePowerBank;

declare type PowerSpawn = StructurePowerSpawn;

declare type Rampart = StructureRampart;

declare type Terminal = StructureTerminal;

declare type Container = StructureContainer;

declare type Tower = StructureTower;

declare interface Storage {

}

declare type CreepMap = {[creepName: string]: Creep};
declare type FlagMap = {[flagName: string]: Flag};
declare type RoomMap = {[roomName: string]: Room};
declare type SpawnMap = {[spawnName: string]: Spawn};
declare type StructureMap = {[structureId: string]: Structure};
declare type ConstructionSiteMap = {[constructionSiteId: string]: ConstructionSite};

declare interface GameI {
    cpu: CPU,
    creeps: CreepMap,
    flags: FlagMap,
    gcl: GlobalControlLevel,
    map: GameMap,
    market: Market,
    rooms: RoomMap,
    spawns: SpawnMap,
    structures: StructureMap,
    constructionSites: ConstructionSiteMap,
    time: number,
    getObjectById<T>(id: string): ?T,
    notify(message: string, groupInterval?: number): void
}

declare interface GlobalControlLevel {
    level: number,
    progress: number,
    progressTotal: number
}

declare interface CPU {
    limit: number,
    tickLimit: number,
    bucket: number,
    getUsed(): number
}

declare interface BodyPartDefinition {
    boost: string,
    type: string,
    hits: number
}

declare interface Owner {
    username: string
}

declare interface ReservationDefinition {
    username: string,
    ticksToEnd: number
}

declare interface StoreDefinition {
    [resource: string]: number,
    energy?: number,
    power?: number
}

declare interface LookAtResultWithPos {
    x: number,
    y: number,
    type: string,
    creep?: Creep,
    terrain?: string,
    structure?: Structure,
    flag?: Flag,
    energy?: Resource,
    exit?: any,
    source?: Source
}

declare interface LookAtResult {
    type: string,
    constructionSite?: ConstructionSite,
    creep?: Creep,
    energy?: Resource,
    exit?: any,
    flag?: Flag,
    source?: Source,
    structure?: Structure,
    terrain?: string
}

declare interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix | LookAtResult[]
}

declare interface FindPathOpts {
    ignoreCreeps?: boolean,
    ignoreDestructibleStructures?: boolean,
    ignoreRoads?: boolean,
    costCallBack(roomName: string, costMatrix: CostMatrix): CostMatrix,
    ignore?: any[] | RoomPosition[],
    avoid?: any[] | RoomPosition[],
    maxOps?: number,
    heuristicWeight?: number,
    serialize?: boolean,
    maxRooms?: number
}

declare interface MoveToOpts {
    reusePath?: number,
    serializeMemory?: boolean,
    noPathFinding?: boolean
}

declare interface PathStep {
    x: number,
    dx: number,
    y: number,
    dy: number,
    direction: number
}

declare interface SurvivalGameInfo {
    score: number,
    timeToWave: number,
    wave: number
}

declare interface Transaction {
    transactionId: string,
    time: number,
    sender: {
	username: string
    },
    recipient: {
	username: string
    },
    resourceType: string,
    amount: number,
    from: string,
    to: string,
    description: string
}

declare interface Memory {
    [name: string]: any,
    creeps: {
	[name: string]: any
    },
    flags: {
	[name: string]: any
    },
    rooms: {
	[name: string]: any
    },
    spawns: {
	[name: string]: any
    }
}

declare interface Mineral {
    prototype: Mineral,
    mineralAmount: number,
    mineralType: string,
    id: string,
    ticksToRegeneration: number
}

declare interface PathFinder {
    CostMatrix: CostMatrix,
    search(
	origin: RoomPosition, goal: RoomPosition | {
	    pos: RoomPosition,
	    range: number
	}, opts?: PathFinderOpts
    ): {
	path: RoomPosition[],
	ops: number
    },
    search(
	origin: RoomPosition, goal: RoomPosition[] | {
	    pos: RoomPosition,
	    range: number
	}[], opts?: PathFinderOpts
    ): {
	path: RoomPosition[],
	ops: number
    },
    use(isEnabled: boolean): any
}

declare interface PathFinderOpts {
    plainCost?: number,
    swampCost?: number,
    flee?: boolean,
    maxOps?: number,
    maxRooms?: number,
    heuristicWeight?: number,
    roomCallback(roomName: string): boolean | CostMatrix
}

declare interface CostMatrix {
    new (): CostMatrix,
    set(x: number, y: number, cost: number): any,
    get(x: number, y: number): any,
    clone(): CostMatrix,
    serialize(): number[],
    deserialize(val: number[]): CostMatrix
}

declare interface RawMemory {
    get(): string,
    set(value: string): any
}

declare class ConstructionSite extends RoomObject {
    id: string;
    my: boolean;
    owner: Owner;
    progress: number;
    progressTotal: number;
    structureType: string;
    remove(): number
}

declare class Creep extends RoomObject {
    body: BodyPartDefinition[];
    carry: StoreDefinition;
    carryCapacity: number;
    fatigue: number;
    hits: number;
    hitsMax: number;
    id: string;
    memory: any;
    my: boolean;
    name: string;
    owner: Owner;
    spawning: boolean;
    saying: string;
    ticksToLive: number;
    attack(target: Creep | Spawn | Structure): number;
    attackController(target: Structure): number;
    build(target: ConstructionSite): number;
    cancelOrder(methodName: string): number;
    claimController(target: Controller): number;
    dismantle(target: Spawn | Structure): number;
    drop(resourceType: string, amount?: number): number;
    getActiveBodyparts(type: string): number;
    harvest(target: Source | Mineral): number;
    heal(target: Creep): number;
    move(direction: number): number;
    moveByPath(path: PathStep[] | RoomPosition[] | string): number;
    moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): number;
    moveTo(
	target: RoomPosition | {
	    pos: RoomPosition
	}, opts?: MoveToOpts & FindPathOpts
    ): number;
    notifyWhenAttacked(enabled: boolean): number;
    pickup(target: Resource): number;
    rangedAttack(target: Creep | Spawn | Structure): number;
    rangedHeal(target: Creep): number;
    rangedMassAttack(): number;
    repair(target: Spawn | Structure): number;
    reserveController(target: Controller): number;
    say(message: string, toPublic?: boolean): number;
    suicide(): number;
    transfer(
	target: Creep | Spawn | Structure, resourceType: string, amount?: number
    ): number;
    upgradeController(target: Controller): number;
    withdraw(target: Structure, resourceType: string, amount?: number): number
}

declare class Flag extends RoomObject {
    color: number;
    memory: any;
    name: string;
    secondaryColor: number;
    remove(): void;
    setColor(color: number, secondaryColor?: number): number;
    setPosition(x: number, y: number): number;
    setPosition(pos: RoomPosition | {
	pos: RoomPosition
    }): number
}

declare type RoutePart = {
	exit: string,
	room: string
};

declare type TerrainMask = string;

declare class GameMap {
    describeExits(roomName: string): {
	"1": string,
	"3": string,
	"5": string,
	"7": string
    };
    findExit(fromRoom: string | Room, toRoom: string | Room): string | number;
    findRoute(
	fromRoom: string | Room, toRoom: string | Room, opts?: {
	    routeCallback: {
		(roomName: string, fromRoomName: string): any
	    }
	}
    ): RoutePart[] | number;
    getRoomLinearDistance(roomName1: string, roomName2: string): number;
    getTerrainAt(x: number, y: number, roomName: string): string;
    isRoomProtected(roomName: string): boolean
}
// getTerrainAt(pos: RoomPosition): string;

declare class Market  {
    incomingTransactions: Transaction[];
    outgoingTransactions: Transaction[]
}

declare class Resource extends RoomObject {
    amount: number;
    id: string;
    resourceType: string
}

declare class RoomObject  {
    // prototype: RoomObject;
    pos: RoomPosition;
    room: Room
}

declare class RoomPosition  {
    constructor(x: number, y: number, roomName: string): this;
    roomName: string;
    x: number;
    y: number;
    createConstructionSite(structureType: string): number;
    createFlag(name?: string, color?: number, secondaryColor?: number): number;
    findClosestByPath<T>(
	type: number, opts?: FindPathOpts & {
	    filter?: any | string,
	    algorithm?: string
	}
    ): T;
    findClosestByPath<T>(
	objects: T[] | RoomPosition[], opts?: FindPathOpts & {
	    filter?: any | string,
	    algorithm?: string
	}
    ): T;
    findClosestByRange<T>(type: number, opts?: {
	filter: any | string
    }): T;
    findClosestByRange<T>(objects: T[] | RoomPosition[], opts?: {
	filter: any | string
    }): T;
    findInRange<T>(type: number, range: number, opts?: {
	filter?: any | string
    }): T[];
    findInRange<T>(
	objects: T[] | RoomPosition[], range: number, opts?: {
	    filter?: any | string
	}
    ): T[];
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    findPathTo(
	target: RoomPosition | {
	    pos: RoomPosition
	}, opts?: FindPathOpts
    ): PathStep[];
    getDirectionTo(x: number, y: number): number;
    getDirectionTo(target: RoomPosition | {
	pos: RoomPosition
    }): number;
    getRangeTo(x: number, y: number): number;
    getRangeTo(target: RoomPosition | {
	pos: RoomPosition
    }): number;
    inRangeTo(toPos: RoomPosition, range: number): boolean;
    isEqualTo(x: number, y: number): boolean;
    isEqualTo(target: RoomPosition | {
	pos: RoomPosition
    }): boolean;
    isNearTo(x: number, y: number): boolean;
    isNearTo(target: RoomPosition | {
	pos: RoomPosition
    }): boolean;
    look(): LookAtResult[];
    lookFor<T>(type: string): T[]
}

declare class Room  {
    controller: Controller;
    energyAvailable: number;
    energyCapacityAvailable: number;
    memory: any;
    mode: string;
    name: string;
    storage: StructureStorage;
    survivalInfo: SurvivalGameInfo;
    terminal: Terminal;
    createConstructionSite(x: number, y: number, structureType: string): number;
    createConstructionSite(pos: RoomPosition | {
	pos: RoomPosition
    }, structureType: string): number;
    createFlag(
	x: number, y: number, name: string, color: number, secondaryColor?: number
    ): number;
    createFlag(
	pos: RoomPosition | {
	    pos: RoomPosition
	}, name: string, color: number, secondaryColor?: number
    ): number;
    find<T>(type: number, opts?: {
	filter: any | string
    }): T[];
    findExitTo(room: string | Room): number;
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    getPositionAt(x: number, y: number): RoomPosition;
    lookAt(x: number, y: number): LookAtResult[];
    lookAt(target: RoomPosition | {
	pos: RoomPosition
    }): LookAtResult[];
    lookAtArea(
	top: number, left: number, bottom: number, right: number, asArray?: boolean
    ): LookAtResultMatrix | LookAtResultWithPos[];
    lookForAt<T>(type: string, x: number, y: number): T[];
    lookForAt<T>(type: string, target: RoomPosition | {
	pos: RoomPosition
    }): T[];
    lookForAtArea(
	type: string, top: number, left: number, bottom: number, right: number, asArray?: boolean
    ): LookAtResultMatrix | LookAtResultWithPos[];
    serializePath(path: PathStep[]): string;
    deserializePath(path: string): PathStep[]
}

declare class Source extends RoomObject {
    prototype: Source;
    energy: number;
    energyCapacity: number;
    id: string;
    ticksToRegeneration: number
}

declare class Spawn extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    hits: number;
    hitsMax: number;
    id: string;
    memory: any;
    my: boolean;
    name: string;
    owner: Owner;
    pos: RoomPosition;
    room: Room;
    structureType: string;
    spawning: {
	name: string,
	needTime: number,
	remainingTime: number
    };
    canCreateCreep(body: BodyPartDefinition[], name?: string): number;
    createCreep(body: BODYPART_TYPE[], name?: string, memory?: any): number | string;
    destroy(): number;
    isActive(): boolean;
    notifyWhenAttacked(enabled: boolean): number;
    renewCreep(target: Creep): number;
    recycleCreep(target: Creep): number;
    transferEnergy(target: Creep, amount?: number): number
}

declare class StructureSpawn extends Spawn {

}

declare class Structure extends RoomObject {
    hits: number;
    hitsMax: number;
    id: string;
    structureType: string;
    destroy(): number;
    isActive(): boolean;
    notifyWhenAttacked(enabled: boolean): number
}

declare class OwnedStructure extends Structure {
    my: boolean;
    owner: Owner
}

declare class StructureController extends OwnedStructure {
    level: number;
    progress: number;
    progressTotal: number;
    reservation: ReservationDefinition;
    ticksToDowngrade: number;
    unclaim(): number
}

declare class StructureExtension extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    transferEnergy(target: Creep, amount?: number): number
}

declare class StructureLink extends OwnedStructure {
    cooldown: number;
    energy: number;
    energyCapacity: number;
    transferEnergy(target: Creep | StructureLink, amount?: number): number
}

declare class StructureKeeperLair extends OwnedStructure {
    ticksToSpawn: number
}

declare class StructureObserver extends OwnedStructure {
    observeRoom(roomName: string): number
}

declare class StructurePowerBank extends OwnedStructure {
    power: number;
    ticksToDecay: number
}

declare class StructurePowerSpawn extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    power: number;
    powerCapacity: number;
    createPowerCreep(name: string): number;
    processPower(): number;
    transferEnergy(target: Creep, amount?: number): number
}

declare class StructureRampart extends OwnedStructure {
    ticksToDecay: number;
    isPublic: boolean;
    setPublic(isPublic: boolean): any
}

declare class StructureRoad extends Structure {
    ticksToDecay: number
}

declare class StructureStorage extends OwnedStructure {
    store: StoreDefinition;
    storeCapacity: number;
    transfer(target: Creep, resourceType: string, amount?: number): number;
    transferEnergy(target: Creep, amount?: number): number
}

declare class StructureTower extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    attack(target: Creep): number;
    heal(target: Creep): number;
    repair(target: Spawn | Structure): number;
    transferEnergy(target: Creep, amount?: number): number
}

declare class StructureWall extends Structure {
    ticksToLive: number
}

declare class StructureExtractor extends OwnedStructure {

}

declare class StructureLab extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    mineralAmount: number;
    mineralType: string;
    mineralCapacity: number;
    boostCreep(creep: Creep, bodyPartsCount?: number): number;
    runReaction(lab1: StructureLab, lab2: StructureLab): number;
    transfer(target: Creep, resourceType: string, amount?: number): number
}

declare class StructureTerminal extends OwnedStructure {
    store: any;
    storeCapacity: number;
    send(
	resourceType: string, amount: number, destination: string, description?: string
    ): number;
    transfer(target: Creep, resourceType: String, amount?: number): number
}

declare class StructureContainer extends Structure {
    store: any;
    storeCapacity: number;
    transfer(target: Creep, resourceType: string, amount?: number): number
}

declare class StructureNuker extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    ghodium: number;
    ghodiumCapacity: number;
    cooldown: number;
    launchNuke(pos: RoomPosition): number
}

declare class StructurePortal extends Structure {
    destination: RoomPosition;
    ticksToDecay: number
}

declare var Game : GameI;
