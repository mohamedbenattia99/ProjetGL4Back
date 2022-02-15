import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingModule } from './modules/rating/rating.module';
import { RatingService } from './services/rating/rating.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: true,
      autoLoadEntities: true
    }),
    RatingModule,
  ],
  controllers: [AppController],
  providers: [AppService, RatingService],
})
export class AppModule {}