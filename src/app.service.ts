import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { Projects } from './entities/projects.entity';
import { Category } from './entities/category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    @InjectRepository(Projects)
    private readonly projectsRepository: Repository<Projects>,
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  async getProjects(): Promise<any> {
    try {
      const result = await this.projectsRepository
        .createQueryBuilder('projects')
        .select('projects.projectTitle AS projectTitle')
        .addSelect('projects.projectId AS id')
        .addSelect('users.userName AS userName')
        .addSelect('category.categoryType as categoryType')
        .leftJoin(Users, 'users', 'users.userId = projects.userId')
        .leftJoin(
          Category,
          'category',
          'category.categoryId = projects.categoryId',
        )
        .take(5)
        .getRawMany();
      return {
        status: true,
        statusCode: HttpStatus.OK,
        data: result,
      };
    } catch (e) {
      return new HttpException(
        { message: e },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
