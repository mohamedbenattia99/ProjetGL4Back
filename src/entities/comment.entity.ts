import { Column, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { DatedEntity } from './dated.entity';
import { UsersEntity } from './users.entity';
import { GameEntity } from './game.entity';

export class CommentEntity extends DatedEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UsersEntity, (user) => user.comments)
  user: UsersEntity;
  
  @ManyToOne(() => GameEntity, (game) => game.comments)
  game: GameEntity;
  
  @Column({type:"text", nullable:false})
  description: string ;
}
