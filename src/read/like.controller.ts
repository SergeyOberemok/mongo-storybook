import { Controller, Get } from '@nestjs/common';
import { PostsService } from 'src/sample-training/services';

@Controller('like')
export class LikeController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll({ title: /us.*/i });
  }
}
