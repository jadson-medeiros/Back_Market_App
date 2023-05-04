import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './resolvers/user.resolver';
import { PrismaService } from './prisma.service';
import { MarketPlaceResolver } from './resolvers/marketplace.resolver';

const graphQLImports = [
  PrismaService,
  UserResolver,
  AppService,
  MarketPlaceResolver,
];

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: graphQLImports,
  exports: [PrismaService],
})
export class AppModule {}
