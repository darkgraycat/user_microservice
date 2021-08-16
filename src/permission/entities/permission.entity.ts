import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { OPERATIONS } from 'src/common/constants';
import { Role } from 'src/role/entities/role.entity';

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  type: OPERATIONS;

  @ManyToMany(type => Role, role => role.permissions)
  roles: Role[];
}
