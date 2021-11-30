import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'projects' })
export class Projects {
  @PrimaryGeneratedColumn('increment', { name: 'projectId', type: 'integer' })
  projectId: number;
  @Column({ name: 'projectTitle', type: 'varchar' })
  projectTitle: string;
  @Column({ name: 'userId', type: 'integer' })
  userId: number;
  @Column({ name: 'categoriesId', type: 'integer' })
  categoriesId: number;
  @Column({ name: 'updatedOn', type: 'timestamp' })
  updatedAt: Date;
}