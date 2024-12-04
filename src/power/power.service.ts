import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    public supplyPower(watts: string): void {
        console.log(`Supplying ${watts} watts of power!`);
    }
}
