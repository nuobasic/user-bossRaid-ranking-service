import { BossRaid } from '../../boss-raid/entity/boss-raid';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @OneToMany(() => BossRaid, (bossRaid) => bossRaid.user)
  bossRaid: BossRaid;
}
