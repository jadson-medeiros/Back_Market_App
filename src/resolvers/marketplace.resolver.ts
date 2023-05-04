import 'reflect-metadata';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import MarketPlace from 'src/dtos/marketplace';
import MarkePlaceInput from './input/marketplace.input';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Resolver(MarketPlace)
export class MarketPlaceResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [MarketPlace])
  public async getMarketPlaces(): Promise<MarketPlace[]> {
    return this.prismaService.marketPlaces.findMany();
  }

  @Query(() => MarketPlace, { nullable: true })
  public async getMarketPlace(@Args('id') id: string): Promise<MarketPlace> {
    return await this.prismaService.marketPlaces.findUnique({
      where: {
        id: id,
      },
    });
  }

  @Mutation(() => MarketPlace)
  public async createMarketPlace(
    @Args('data') input: MarkePlaceInput,
  ): Promise<MarketPlace> {
    return this.prismaService.marketPlaces.create({
      data: {
        name: input.name,
      },
    });
  }
}
