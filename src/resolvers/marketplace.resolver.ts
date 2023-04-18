import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import MarketPlace from 'src/dtos/marketplace';
import { PrismaService } from 'src/prisma.service';
import { Inject } from '@nestjs/common';
import { marketsplaces } from '@prisma/client';

@Resolver()
export default class MarketPlaceResolver {
  constructor(private prismaService: PrismaService) {}
  @Query(() => [MarketPlace])
  public async getMarketPlaces(): Promise<marketsplaces[]> {
    return this.prismaService.marketsplaces.findMany();
  }

  @Query(() => MarketPlace, { nullable: true })
  public async getMarketPlace(@Args('id') id: number): Promise<marketsplaces> {
    return await this.prismaService.marketsplaces.findUnique({
      where: {
        id: id,
      },
    });
  }

  @Mutation(() => MarketPlace)
  public async createMarketPlace(
    @Args('data') input: MarketPlace,
  ): Promise<marketsplaces> {
    return this.prismaService.marketsplaces.create({
      data: {
        name: input.name,
      },
    });

    //return this.prismaService.marketsplaces.update({data: {marketplace} });
  }
}
