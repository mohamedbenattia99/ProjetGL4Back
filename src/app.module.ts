import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RatingModule } from './modules/rating/rating.module';
import { RatingService } from './services/rating/rating.service';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: ['dist/**/*.entity.js'],
      migrations: ['dist/src/migrations/*{.ts,.js}'],
      cli: { migrationsDir: 'src/migrations'},
      synchronize: true,
      logging: true,
    }),
    RatingModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, RatingService],
})
export class AppModule {}
