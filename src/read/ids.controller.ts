import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from 'src/sample-training/services/posts.service';

@Controller('ids')
export class IdsController {
  constructor(private readonly postsService: PostsService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }
}
