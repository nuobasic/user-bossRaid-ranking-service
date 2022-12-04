import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BossRaid } from './entity/boss-raid';
import { Cache, memoryStore } from 'cache-manager';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class BossRaidService {
  constructor(
    @InjectRepository(BossRaid)
    private readonly bossRaidRepository: Repository<BossRaid>,
    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
    private readonly httpService: HttpService,
  ) {}

  async staticData() {
    const { data } = await this.httpService.axiosRef.get(
      'https://dmpilf5svl7rv.cloudfront.net/assignment/backend/bossRaidData.json',
    );

    const bossRaidData = data.bossRaids[0];
    const memoryCache = await memoryStore();
    await memoryCache.set(
      'bossRaidLimitSeconds',
      bossRaidData.bossRaidLimitSeconds,
    );
    await memoryCache.set('level_1', bossRaidData.levels[0].score);
    await memoryCache.set('level_2', bossRaidData.levels[1].score);
    await memoryCache.set('level_3', bossRaidData.levels[2].score);

    console.log(await memoryCache.get('bossRaidLimitSeconds'));
    console.log(await memoryCache.get('level_1'));
    console.log(await memoryCache.get('level_2'));
    console.log(await memoryCache.get('level_3'));
    return 'hello';
  }
}
