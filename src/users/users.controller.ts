import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('/addUser')
  @ApiResponse({ status: 201, description: 'The User has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('/allUsers')
  findAllUsers() {
    return this.usersService.findAllUsers();
  }

  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return this.usersService.findOneUser(+id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: 'The User has been successfully updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUser(+id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: 'The User has been successfully deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  removeUser(@Param('id') id: string) {
    return this.usersService.removeUser(+id);
  }
}
