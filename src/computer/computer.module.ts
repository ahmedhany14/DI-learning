import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { CpuService} from "../cpu/cpu.service";
import { DiskService} from "../disk/disk.service";
import {CpuModule} from "../cpu/cpu.module";
import {DiskModule} from "../disk/disk.module";

@Module({
  imports : [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
