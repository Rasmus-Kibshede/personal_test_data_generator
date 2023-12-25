export class Chassis {
    private chassisId: number;
    private color: string;
    private wheel: number;
    private capacity: number; //Hvor mange passagere

    constructor(chassisId: number, color: string, wheel: number, capacity: number){
        this.chassisId = chassisId;
        this.color = color;
        this.wheel = wheel;
        this.capacity = capacity;
    }

    getChassisId(): number {
        return this.chassisId;
    }

    setChassisId(value: number){
        this.chassisId = value;
    }

    getColor(): string {
        return this.color;
    }

    setColor(value: string) {
        this.color = value;
    }

    getCapacity(): number {
        return this.capacity;
    }

    setCapacity(value: number) {
        this.capacity = value;
    }

    getWheel(): number {
        return this.wheel
    }

    setWheel(value: number) {
        this.wheel = value
    }
}