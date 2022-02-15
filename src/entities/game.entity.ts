import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DatedEntity } from './dated.entity';
import { RatingEntity } from './rating.entity';
import { CommentEntity } from './comment.entity';

@Entity('Game')
export class GameEntity extends DatedEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @OneToMany(() => RatingEntity, (rating) => rating.game)
  ratings: RatingEntity[];
  @OneToMany(() => CommentEntity, (comment) => comment.game)
  comments: CommentEntity[];
}
