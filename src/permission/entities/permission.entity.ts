import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { OPERATIONS } from 'src/common/constants';
import { Role } from 'src/role/entities/role.entity';

@Entity('permission')
export class Permission {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  operation: OPERATIONS;

  @OneToMany(() => Role, role => role.uuid)
  roles: Role[];
}
