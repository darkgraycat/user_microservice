import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/role.entity';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) { }

  @Get()
  getAll(): Promise<Role[]> {
    return this.roleService.getAll();
  }

  @Post()
  create(@Body() dto: CreateRoleDto): Promise<Role> {
    return this.roleService.create(dto);
  }
}
