import { Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { DatedEntity } from './dated.entity';
import { UsersEntity } from './users.entity';
import { GameEntity } from './game.entity';
import { min } from 'class-validator';

export class RatingEntity extends DatedEntity {
  @PrimaryColumn("user")
  @ManyToOne(() => UsersEntity, (user) => user.ratings)
  user: UsersEntity;
  @PrimaryColumn("game")
  @ManyToOne(() => GameEntity, (game) => game.ratings)
  game: GameEntity;
  @Column({type:'number'})
  value: number;
}
