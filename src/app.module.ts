import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { options } from './config/ormconfig';
import { RepoModule } from './repo.module';
import UserResolver from './resolvers/user.resolver';

const graphQLImports = [UserResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    RepoModule,
    ...graphQLImports,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
