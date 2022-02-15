import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users/users.controller';
import {UsersService } from 'src/services/users/users.service';
import { UsersEntity} from 'src/entities/users.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UsersEntity])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {}
