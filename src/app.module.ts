import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LikeController } from './read';
import { SampleTrainingModule } from './sample-training/sample-training.module';
import { IdsController } from './read/ids.controller';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService
          .get<string>('MONGO_DB_CONNECTION_STRING')
          .replace(
            '<database>',
            configService.get<string>('SAMPLE_TRAINING_DB'),
          ),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot(),
    SampleTrainingModule,
  ],
  controllers: [AppController, LikeController, IdsController],
  providers: [AppService],
})
export class AppModule {}
