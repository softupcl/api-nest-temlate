import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductosModule } from './productos/productos.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './auth/auth.module';
import { CategoriasModule } from './categorias/categorias.module';


@Module({
  imports: [
    ConfigModule.forRoot(), //establece variables de entorno
    TypeOrmModule.forRoot({
      type:'postgres',
      host:process.env.DB_HOST,
      port:+process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password:process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }), ProductosModule, CommonModule, SeedModule, FilesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
    }),
    AuthModule,
    CategoriasModule
  ],

})
export class AppModule {}
