import { Injectable, Inject } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
  constructor(
     private powerService: PowerService, // 👈 Inject
  ) {}

  compute(a: number, b: number): number {
    this.powerService.supplyPower('50'); // 👈 Use
    return a + b;
  }
}
