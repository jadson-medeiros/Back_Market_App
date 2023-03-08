import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import MarketPlace from 'src/db/models/marketplace.entity';
import { RepoService } from 'src/repo.service';

@Resolver()
export default class MarketPlaceResolver {
  constructor(private readonly repoService: RepoService) {}

  @Query(() => [MarketPlace])
  public async getMarketPlaces(): Promise<MarketPlace[]> {
    return this.repoService.marketPlaceRepo.find();
  }

  @Query(() => MarketPlace, { nullable: true })
  public async getMarketPlace(@Args('id') id: number): Promise<MarketPlace> {
    return await this.repoService.marketPlaceRepo.findOne({
      where: {
        id: id,
      },
    });
  }

  @Mutation(() => MarketPlace)
  public async createMarketPlace(
    @Args('data') input: MarketPlace,
  ): Promise<MarketPlace> {
    const marketplace = this.repoService.marketPlaceRepo.create({
      name: input.name,
    });

    return this.repoService.marketPlaceRepo.save(marketplace);
  }
}
