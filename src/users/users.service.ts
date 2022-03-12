import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async createUser(createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersRepository.save(createUserDto);
      return newUser;
    }
    catch (error) {
      return error;
    }
  }

  async findAllUsers() {
    try {
      return await this.usersRepository.find();
    } catch (error) {
      return error;
    }
  }

  async findOneUser(id: number) {
    try {
      return await this.usersRepository.findOne(id);
    } catch (error) {
      return error;
    }
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto) {
    try {
      const updateUser = await this.usersRepository.update(id, updateUserDto);
      if (updateUser) {
        const updatedUser = await this.usersRepository.findOne(id);
        return updatedUser;
      }

    } catch (error) {
      return error;
    }
  }

  async removeUser(id: number) {
    try {
      return await this.usersRepository.delete(id);
    } catch (error) {
      return error;
    }

  }
}
