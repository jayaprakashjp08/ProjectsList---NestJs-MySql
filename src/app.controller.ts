import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('projects')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getProjects')
  @ApiTags('Projects')
  getProjects(): string {
    const result: any = this.appService.getProjects();
    return result;
  }
}
