import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
  ) { }

  getAll(): Promise<Permission[]> {
    return this.permissionRepository.find({
      relations: ['roles'],
    });
  }

  getById(id: string): Promise<Permission> {
    return this.permissionRepository.findOne(id, {
      relations: ['roles'],
    });
  }

  async create(dto: CreatePermissionDto): Promise<Permission> {
    const permission = await this.permissionRepository.create(dto);
    return this.permissionRepository.save(permission);
  }

  async delete(id: string): Promise<DeleteResult> {
    const permission = await this.getById(id);
    return this.permissionRepository.delete(permission);
  }
}
