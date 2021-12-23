import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { IsEmail} from "class-validator";
@Entity('user')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 20, unique: true} )
    username: string;
    
    @Column({unique: true})
    @IsEmail()
    email: string;
    
    @Column({length: 20})
    password: string;
    
    @Column({type: 'timestamp', default: ()=> 'CURRENT_TIMESTAMP'})
    createdAt: Date;
    constructor() {

    }
}