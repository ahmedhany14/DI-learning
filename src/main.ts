import { NestFactory } from '@nestjs/core';
import { ComputerModule } from './computer/computer.module';
import { config } from 'dotenv';
config({
  path: '.config.env',
});

async function bootstrap() {
  const app = await NestFactory.create(ComputerModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
