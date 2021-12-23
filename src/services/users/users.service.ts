import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from 'src/entities/users.entity';
import {UsersDTO} from 'src/dto/users.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ){}

    async findAll() {
        return await this.usersRepository.find();
    }

    async create (data: UsersDTO) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(data);
        return user;
    }

    async findOneUser(id:number) {
        return await this.usersRepository.findOne({where: {
            id: id
        }});
    }

    async update(id: number, data: Partial<UsersDTO>) {
        await this.usersRepository.update({id}, data);
        return await this.usersRepository.findOne({id});
    }




}
