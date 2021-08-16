import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from 'src/permission/entities/permission.entity';
import { Role } from './entities/role.entity';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [TypeOrmModule.forFeature([Role, Permission])],
  exports: [RoleService],
  controllers: [RoleController],
  providers: [RoleService]
})
export class RoleModule { }
