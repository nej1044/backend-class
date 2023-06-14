import { Module } from '@nestjs/common';
import { PowerModule } from 'src/power/power.module';
import { DiskService } from './disk.service';

@Module({
  imports: [PowerModule],
  providers: [DiskModule, DiskService],
  exports: [DiskService],
})
export class DiskModule {}
