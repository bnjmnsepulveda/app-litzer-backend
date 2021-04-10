import { ObjectType, Field, ID } from "type-graphql";
import { Song } from "./Song";

@ObjectType()
export class Album {
    @Field(type => ID)
    id: string;
    @Field()
    name: string;
    @Field()
    artist: string;
    @Field()
    img: string;
    @Field(type => [Song])
    songs: Song[]
}