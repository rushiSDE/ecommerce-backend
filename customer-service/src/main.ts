import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'customer_queue',
      queueOptions: { durable: true },
    },
  });

  // ✅ Enable CORS for frontend on port 5000
  app.enableCors({
    origin: 'http://localhost:8000',
  });

  await app.startAllMicroservices();
  await app.listen(3001);
  console.log('Customer Service is running on http://localhost:3001');
}
bootstrap();