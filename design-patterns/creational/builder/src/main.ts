// Builder interface specifies methods for creating the different parts of the Product objects.
interface HouseBuilder {
    buildFoundation(): void;
    buildWalls(): void;
    buildRoof(): void;
    buildDoors(): void;
    buildWindows(): void;
}

// Concrete Builder for building a basic house
class BasicHouseBuilder implements HouseBuilder {
    private house: House

    constructor() {
        this.reset();
    }

    private reset(): void {
        this.house = new House();
    }

    buildFoundation() {
        this.house.foundation = 'Basic foundation';
    }

    buildWalls() {
        this.house.walls = 'Basic walls';
    }

    buildRoof() {
        this.house.roof = 'Basic roof';
    }

    buildDoors() {
        this.house.doors = 'Basic doors';
    }

    buildWindows() {
        this.house.windows = 'Basic windows';
    }

    getHouse(): House {
        const finishedHouse = this.house;
        this.reset();
        return finishedHouse;
    }
}

// Concrete Builder for building a fancy house
class FancyHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.reset();
    }

    private reset(): void {
        this.house = new House();
    }

    buildFoundation() {
        this.house.foundation = 'Fancy foundation';
    }

    buildWalls() {
        this.house.walls = 'Fancy walls';
    }

    buildRoof() {
        this.house.roof = 'Fancy roof';
    }

    buildDoors() {
        this.house.doors = 'Fancy doors';
    }

    buildWindows() {
        this.house.windows = 'Fancy windows';
    }

    getHouse(): House {
        const finishedHouse = this.house;
        this.reset();
        return finishedHouse;
    }
}

// House class represents the complex object being constructed
class House {
    foundation: string = '';
    walls: string = '';
    roof: string = '';
    doors: string = '';
    windows: string = '';

    describe(): string {
        return `Foundation: ${this.foundation}, Walls: ${this.walls}, Roof: ${this.roof}, Doors: ${this.doors}, Windows: ${this.windows}`;
    }
}

// Director class orchestrates the construction process
class Director {
    private builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.builder = builder;
    }

    buildHouse() {
        this.builder.buildFoundation();
        this.builder.buildWalls();
        this.builder.buildRoof();
        this.builder.buildDoors();
        this.builder.buildWindows();
    }
}

// Client code
function clientCode() {
    const basicHouseBuilder = new BasicHouseBuilder();
    const fancyHouseBuilder = new FancyHouseBuilder();

    const basicHouseDirector = new Director(basicHouseBuilder);
    basicHouseDirector.buildHouse();
    const basicHouse = basicHouseBuilder.getHouse();

    const fancyHouseDirector = new Director(fancyHouseBuilder);
    fancyHouseDirector.buildHouse();
    const fancyHouse = fancyHouseBuilder.getHouse();

    console.log('Basic House:');
    console.log(basicHouse.describe());

    console.log('Fancy House:');
    console.log(fancyHouse.describe());
}

clientCode();