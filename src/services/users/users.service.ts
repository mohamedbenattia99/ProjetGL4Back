import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UsersEntity } from 'src/entities/users.entity';
import { BaseService } from '../base/base.service';

@Injectable()
export class UsersService extends BaseService<UsersEntity> {
    constructor(
        @InjectRepository(UsersEntity)
        private readonly usersRepository: Repository<UsersEntity>,
    ){
        super(usersRepository)
    }

}

