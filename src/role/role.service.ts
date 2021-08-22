import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from '../permission/entities/permission.entity';
import { In, Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) { }

  getAll(): Promise<Role[]> {
    return this.roleRepository.find({
      relations: ['permissions'],
    });
  }

  getById(id: string): Promise<Role> {
    return this.roleRepository.findOne(id, {
      relations: ['permissions'],
    });
  }

  async create(dto: CreateRoleDto): Promise<Role> {
    const permissions = await this.permissionRepository.find({
      uuid: In(dto.permissionUuids),
    });
    const role = this.roleRepository.create({
      ...dto,
      permissions
    });
    return this.roleRepository.save(role);
  }
}
