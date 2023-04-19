import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class MarketPlace {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
