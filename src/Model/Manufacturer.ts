export class Manufacturer{
    private manufacturerId: number;
    private make: string;
    private model: string;
    private year: number

    constructor(manufacturerId: number, make: string, model: string, year: number){
        this.manufacturerId = manufacturerId;
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getManufacturerId():number {
        return this.manufacturerId;
    }

    setManufacturerId(value: number){
        this.manufacturerId = value;
    }

    getMake(): string {
        return this.make;
      }
    
      setMake(value: string) {
        this.make = value;
      }
    
      getModel(): string {
        return this.model;
      }
    
      setModel(value: string) {
        this.model = value;
      }

      getYear(): number {
        return this.year;
      }
    
      setYear(value: number) {
        this.year = value;
      }
}