import { Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { DatedEntity } from './dated.entity';
import { UsersEntity } from './users.entity';
import { GameEntity } from './game.entity';

export class RatingEntity extends DatedEntity {
  @PrimaryColumn()
  @ManyToOne(() => UsersEntity, (user) => user.ratings)
  user: UsersEntity;
  @PrimaryColumn()
  @ManyToOne(() => GameEntity, (game) => game.ratings)
  game: GameEntity;
  @Column()
  value: number;
}
