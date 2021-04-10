import { ObjectType, Field, ID } from "type-graphql";
import { Song } from "./Song";

@ObjectType({ description: "Album Schema" })
export class Album {
    @Field(type => ID)
    id: string;
    @Field({ description: "Album name" })
    name: string;
    @Field({ description: "Artist name" })
    artist: string;
    @Field({ description: "Album image url" })
    img: string;
    @Field(type => [Song], { description: "Album Songs" })
    songs: Song[]
}