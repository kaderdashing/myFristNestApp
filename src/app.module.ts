import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user/user.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { Product } from './product/entities/product';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: [User , Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
    TypeOrmModule.forFeature([User , Product]), 
  ],
  controllers: [AppController , UserController , ProductController],
  providers: [AppService , UserService , ProductService],
})
export class AppModule {}
