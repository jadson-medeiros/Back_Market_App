import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import MarketPlace from './db/models/marketplace.entity';
import User from './db/models/user.entity';
import { RepoService } from './repo.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, MarketPlace])],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
