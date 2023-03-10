import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { from, Observable } from 'rxjs';
import { Post, PostDocument } from '../schemas';
import { Types } from 'mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  findAll(params?: any): Observable<Post[]> {
    return from(this.postModel.find(params).exec());
  }

  findOne(id: string): Observable<Post> {
    return from(this.postModel.findById(new Types.ObjectId(id)).exec());
  }
}
