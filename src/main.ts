import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';
import { BasicAuthGuard } from './auth/auth.guard.js';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalGuards(new BasicAuthGuard(configService));
  app.useGlobalPipes(new ValidationPipe());

  const port = configService.get<number>('PORT');

  await app.listen(port);
}
bootstrap();
