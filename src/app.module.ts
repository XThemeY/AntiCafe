import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module.js';
import { VideoGameModule } from './videogame/videogame.module.js';
import { BoardGameModule } from './boardgame/boardgame.module.js';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DATABASE_URL'),
        dbName: configService.get<string>('DB_NAME')
      }),
      inject: [ConfigService]
    }),
    UserModule,
    VideoGameModule,
    BoardGameModule
  ],
  controllers: [AppController]
})
export class AppModule {}
