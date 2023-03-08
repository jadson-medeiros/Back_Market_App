import { Field, InputType } from '@nestjs/graphql';

@InputType()
export default class MarkePlaceInput {
  @Field()
  readonly name: string;
}
