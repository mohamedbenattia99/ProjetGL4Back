import { Module } from '@nestjs/common';
import { RatingController } from '../../controllers/rating/rating.controller';

@Module({
  controllers: [RatingController],
})
export class RatingModule {}
