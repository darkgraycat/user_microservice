import { IsEmail } from 'class-validator';
import { Role } from 'src/role/entities/role.entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  // @Column({ nullable: true })
  // roleUuid?: string;

  @ManyToOne(role => Role, role => role.uuid)
  role?: Role;
}
