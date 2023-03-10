import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikeController } from './read';
import { SampleTrainingModule } from './sample-training/sample-training.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      '',
    ),
    SampleTrainingModule,
  ],
  controllers: [AppController, LikeController],
  providers: [AppService],
})
export class AppModule {}
