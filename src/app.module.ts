import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USERNAME, HOST } from './common/constants';

@Module({
  imports: [
    RoleModule,
    UserModule,
    PermissionModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: HOST,
      port: DB_PORT,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      autoLoadEntities: true,
      // synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
