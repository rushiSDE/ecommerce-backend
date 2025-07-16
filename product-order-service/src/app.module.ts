import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432, // Use 5433 for customer-service
      username: 'postgres',
      password: 'Rushi@772244',
      database: 'products_orders_db', // 'customers_db' for customer-service
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
