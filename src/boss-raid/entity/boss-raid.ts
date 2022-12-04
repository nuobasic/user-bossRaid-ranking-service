import { User } from '../../user/entity/User';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BossRaidStatus } from './boo-raid.status';

@Entity('bossraid')
export class BossRaid {
  @PrimaryGeneratedColumn()
  bossRaidId?: number;

  @Column()
  score: number;

  @Column()
  enterTime: Date;

  @Column()
  endTime: Date;

  @Column()
  level: number;

  @Column({ type: 'enum', enum: BossRaidStatus })
  bossRaidStatus: BossRaidStatus;

  @ManyToOne(() => User, (user) => user.bossRaid)
  @JoinColumn()
  user: User;
}
