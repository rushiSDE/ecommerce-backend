import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';


@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: 'localhost',
    //   port: 5432, // Use 5433 for customer-service
    //   username: 'postgres',
    //   password: 'Rushi@772244',
    //   database: 'products_orders_db', // 'customers_db' for customer-service
    //   autoLoadEntities: true,
    //   synchronize: true,
    // }),
  TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10) ||5433,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'Rushi@772244',
      database: process.env.POSTGRES_DB || 'products_orders_db',
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
