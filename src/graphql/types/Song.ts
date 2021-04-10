import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Song {
    @Field(type => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    duration: string;
    @Field()
    url: string;
}