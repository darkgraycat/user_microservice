import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from '../../user/entities/user.entity';
import { Permission } from '../../permission/entities/permission.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @OneToMany(() => User, user => user.uuid)
  users: User[];

  @JoinTable()
  @ManyToMany(type => Permission, permission => permission.roles, { cascade: true })
  permissions: Permission[];
}
