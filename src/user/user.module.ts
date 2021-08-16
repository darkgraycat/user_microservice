import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from 'src/role/entities/role.entity';
import { RoleModule } from 'src/role/role.module';
import { User } from './entities/user.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), RoleModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
