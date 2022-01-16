import { Controller, Get, Post, Patch, Body, Param, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { UsersDTO} from 'src/dto/users.dto';
import { BaseController } from 'src/services/base/base.controller';
import { UsersEntity } from 'src/entities/users.entity';

@Controller('users')
export class UsersController extends BaseController<UsersEntity>{
    constructor(private usersService: UsersService) {
        super(usersService)
    }

   
    
}
