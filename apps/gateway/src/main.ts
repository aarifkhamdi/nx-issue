import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule, {
    bodyParser: false,
  });
  enableSwagger(app);
  await app.listen(3000);
}

void bootstrap();

function enableSwagger(app: INestApplication): void {
  const docConfig = new DocumentBuilder()
    .setTitle('hello')
    .setDescription('world')
    .setVersion(process.env.npm_package_version ?? 'unknown')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docConfig);
  SwaggerModule.setup('swagger', app, document);
}
