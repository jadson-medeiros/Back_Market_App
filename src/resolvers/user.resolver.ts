import 'reflect-metadata';

import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import User from 'src/dtos/user';
import UserInput from './input/user.input';
import { Inject } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [User])
  public async getUsers(): Promise<User[]> {
    return this.prismaService.users.findMany();
  }

  @Query(() => User, { nullable: true })
  public async getUser(@Args('id') id: number): Promise<User> {
    return await this.prismaService.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  @Mutation(() => User)
  public async createUser(@Args('data') input: UserInput): Promise<User> {
    return this.prismaService.users.create({
      data: {
        name: input.name,
        email: input.email,
        password: input.password,
      },
    });

    //return this.repoService.userRepo.save(user);
  }
}
