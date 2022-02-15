import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingEntity } from 'src/entities/rating.entity';
import { RatingService } from 'src/services/rating/rating.service';
import { RatingController } from '../../controllers/rating/rating.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RatingEntity])],
  controllers: [RatingController],
  providers: [RatingService]
})
export class RatingModule {}
