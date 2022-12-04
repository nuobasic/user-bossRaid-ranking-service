import { Module } from '@nestjs/common';
import { BossRaidService } from './boss-raid.service';
import { BossRaidController } from './boss-raid.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BossRaid } from './entity/boss-raid';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TypeOrmModule.forFeature([BossRaid]), HttpModule],
  providers: [BossRaidService],
  controllers: [BossRaidController],
})
export class BossRaidModule {}
