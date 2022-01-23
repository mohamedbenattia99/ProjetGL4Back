import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from 'src/entities/users.entity';
import {UsersDTO} from 'src/dto/users.dto';
import { BaseService } from '../base/base.service';

@Injectable()
export class UsersService extends BaseService<UsersEntity> {
    constructor(
        @InjectRepository(UsersEntity)
        private usersRepository: Repository<UsersEntity>,
    ){
        super(usersRepository)
    }

}

