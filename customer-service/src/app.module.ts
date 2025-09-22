import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
      // type: 'postgres',
      // host: 'localhost',
      // port: 5432, 
      // username: 'postgres',
      // password: 'Rushi@772244',
      // database: 'customers_db',
      // autoLoadEntities: true,
      // synchronize: true,
    // }),

  //   TypeOrmModule.forRoot({
  // type: 'postgres',
  // host: process.env.POSTGRES_HOST,
  // port: parseInt(process.env.POSTGRES_PORT, 10), // Convert string to number
  // username: process.env.POSTGRES_USER,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,
  // autoLoadEntities: true,
  // synchronize: true,

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: parseInt(process.env.POSTGRES_PORT ?? '5432', 10) ||5433,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'Rushi@772244',
      database: process.env.POSTGRES_DB || 'customers_db',
      autoLoadEntities: true,
      synchronize: true,
    }),

    CustomersModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
