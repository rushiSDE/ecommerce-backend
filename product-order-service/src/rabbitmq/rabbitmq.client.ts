import { ClientProxyFactory, Transport } from '@nestjs/microservices';

export const rabbitmqClient = ClientProxyFactory.create({
  transport: Transport.RMQ,
  options: {
    urls: ['amqp://guest:guest@localhost:5672'],
    queue: 'main_queue',
    queueOptions: { durable: true },
  },
});