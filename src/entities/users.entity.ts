import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class Users {
  @PrimaryGeneratedColumn('increment', { name: 'userID', type: 'integer' })
  userID: number;
  @Column({ name: 'userName', type: 'varchar' })
  userName: string;
  @Column({ name: 'updatedAt', type: 'timestamp' })
  updatedAt: Date;
}