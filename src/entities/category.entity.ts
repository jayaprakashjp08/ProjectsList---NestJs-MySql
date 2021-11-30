import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('increment', { name: 'categoryId', type: 'integer' })
  categoryId: number;
  @Column({ name: 'categoryType', type: 'varchar' })
  categoryType: string;
  @Column({ name: 'updatedOn', type: 'timestamp' })
  updatedAt: Date;
}