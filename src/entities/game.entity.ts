import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Game')
export class GameEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
