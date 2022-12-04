import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { BossRaidService } from './boss-raid.service';

@UseInterceptors(CacheInterceptor)
@Controller('boss-raid')
export class BossRaidController {
  constructor(private readonly bossRaidService: BossRaidService) {}

  @Get()
  async staticDataGet() {
    return await this.bossRaidService.staticData();
  }
}
