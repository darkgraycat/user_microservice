import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from '../permission/entities/permission.entity';
import { Repository } from 'typeorm';
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
    const role = await this.roleRepository.create({ name: dto.name });
    dto.permissionUuids.map(async (uuid) => {
      const permission = await this.permissionRepository.findOne(uuid);
      if (!permission) throw new Error(`Invalid permission id: ${uuid}`);
      role.permissions.push(permission);
    });
    return this.roleRepository.save(role);
  }
}
