import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Song {
    @Field(type => ID)
    id: string;
    @Field({ description: "Song name" })
    name: string;
    @Field({ description: "track duraction" })
    duration: string;
    @Field({ description: "url file track", nullable: true })
    url?: string;
}