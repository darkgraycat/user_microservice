import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permission.entity';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @Get()
  getAll(): Promise<Permission[]> {
    return this.permissionService.getAll();
  }

  @Post()
  create(@Body() dto: CreatePermissionDto): Promise<Permission> {
    return this.permissionService.create(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<DeleteResult> {
    return this.permissionService.delete(id);
  }
}
