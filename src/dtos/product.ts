import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export default class Product {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field()
  brand: string;

  @Field()
  weight: number;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
