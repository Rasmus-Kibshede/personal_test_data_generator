export class Registration {
    private registrationId: number;
    private VIN: string;
    private licenseNumber: string;

    constructor(registrationId: number, VIN: string, licenseNumber: string) {
        this.registrationId = registrationId;
        this.VIN = VIN;
        this.licenseNumber = licenseNumber;
    }

    getRegistrationId():number {
        return this.registrationId;
    }

    setRegistrationId(value: number){
        this.registrationId = value;
    }

    getVIN(): string {
        return this.VIN;
    }

    setVIN(value: string) {
        this.VIN = value;
    }

    getLicenseNumber(): string {
        return this.licenseNumber;
    }

    setLicenseNumber(value: string) {
        this.licenseNumber = value;
    }
}