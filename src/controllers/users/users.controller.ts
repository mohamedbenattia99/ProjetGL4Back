import { Controller, Get, Post, Patch, Body, Param, HttpStatus } from '@nestjs/common';
import { UsersService } from 'src/services/users/users.service';
import { UsersDTO} from 'src/dto/users.dto';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @Get()
    async findAllUsers(){
        const users = await this.usersService.findAll();
        return users;
        
    }

    @Post()
    async createUser(@Body() data: UsersDTO) {
        const user = await this.usersService.create(data);
        return{
            statusCode: HttpStatus.OK,
            message: 'user created successfully',
            user
        };
      }  

      @Get(':id')
      async findOneUser(@Param('id') id:number) {
          const data = await this.usersService.findOneUser(id)
      
      return {
          statusCode: HttpStatus.OK,
          message: 'User fetched successfully',
          data,
      };}

      @Patch(':id')
      async updateUser(@Param('id') id:number, @Body() data: Partial<UsersDTO>){
        await this.usersService.update(id, data);
        return {
            statusCode: HttpStatus.OK,
            message: 'User updated successfully',
        };
      }
    
}
