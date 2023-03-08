import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import MarketPlace from './db/models/marketplace.entity';
import User from './db/models/user.entity';

export class RepoService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(MarketPlace)
    public readonly marketPlaceRepo: Repository<MarketPlace>,
  ) {}
}
