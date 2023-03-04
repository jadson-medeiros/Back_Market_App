import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormOptions from './config/ormconfig';

@Module({
  imports: [DataSource],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
