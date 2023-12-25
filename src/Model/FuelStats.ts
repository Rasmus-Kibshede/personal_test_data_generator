export class FuelStats { //Navngiving skal laves om
    private fuelStatsId: number;
    private fuelTank: number; //Antal L brændstof imellem 40-65L
    private range: number; //Hvor langt kan den køre


    constructor(fuelStatsId: number, fuelTank: number, range: number) {
        this.fuelStatsId = fuelStatsId;
        this.fuelTank = fuelTank;
        this.range = range;
    }

    getFuelStatsId(): number {
        return this.fuelStatsId;
    }

    setFuelStatsId(value: number) {
        this.fuelStatsId = value;
    }

    getRange(): number {
        return this.range;
    }

    setRange(value: number) {
        this.range = value;
    }

    getFuelTank(): number {
        return this.fuelTank;
    }

    setFuelTank(value: number) {
        this.fuelTank = value;
    }
}