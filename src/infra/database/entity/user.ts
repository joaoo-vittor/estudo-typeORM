import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from 'typeorm';
import { Products } from './product'

@Entity({ schema: 'public', name: 'users' })
export class Users {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column("varchar", { length: 168 })
  first_name: string;

  @Column("varchar", { length: 168 })
  last_name: string;

  @Column()
  email: string;

  @Column()
  is_active: boolean;

  @OneToMany(() => Products, (product) => product.user)
  products?: Products[]
}

