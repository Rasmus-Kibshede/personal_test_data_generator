export class Chassis {
    private color: string;
    private wheel: number;
    private capacity: number; //Hvor mange passagere


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