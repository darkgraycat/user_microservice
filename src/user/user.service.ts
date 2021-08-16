import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/role/entities/role.entity';
import { RoleService } from 'src/role/role.service';
import { Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly roleService: RoleService,
  ) { }

  getAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['role'],
    });
  }

  getById(id: string): Promise<User> {
    return this.userRepository.findOne(id, {
      relations: ['role'],
    });
  }

  async create(dto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.create(dto);
    return this.userRepository.save(user);
  }

  async addRole(id: string, body): Promise<UpdateResult> {
    return this.userRepository.update(id, {
      role: await this.roleService.getById(body.uuid)
    });
  }

  async isAdmin(id: string): Promise<boolean> {
    const user = await this.getById(id);
    return user.role.name === 'Admin';
  }
}
