import { Injectable, Inject } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(
     private powerService: PowerService, // 👈 Inject
  ) {}

  read() {
    this.powerService.supplyPower('10');
    return 'Reading a disk!';
  }
}
