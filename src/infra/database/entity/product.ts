import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Users } from './user';

@Entity({ name: 'products', schema: 'public' })
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("varchar", { length: 255 })
  name: string;

  @Column()
  amount: number;

  @Column()
  user_id: number;

  @ManyToOne(() => Users, (user) => user.products)
  @JoinColumn({ name: 'user_id' })
  user: Users;
}

