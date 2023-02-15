import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductDetailsModule } from './product-detail/product-details.module';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/image.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: null,
      database: 'nest-products-db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ProductsModule,
    ProductDetailsModule,
    UserModule,
    PhotoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LoggerMiddleware)
  //     .exclude({ path: 'products/find/all', method: RequestMethod.GET })
  //     .forRoutes(ProductsController);
  // }
}
