import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';

const userForFeature = TypeOrmModule.forFeature([User]);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'test',
      synchronize: true,
      logging: false,
      entities: [User],
    }),
    userForFeature,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
