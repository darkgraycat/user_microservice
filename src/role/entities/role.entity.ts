import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { User } from 'src/user/entities/user.entity';
import { Permission } from 'src/permission/entities/permission.entity';

@Entity('role')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @OneToMany(() => User, user => user.uuid)
  users: User[];

  @ManyToMany(() => Permission)
  @JoinTable()
  permissions: Permission[];
}
