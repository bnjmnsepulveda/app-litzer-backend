import { ObjectType, Field, ID } from "type-graphql";
import { Song } from "./Song";

@ObjectType({ description: "Player Schema" })
export class Player {
    @Field(type => ID)
    id: string;
    @Field({ description: "Player name" })
    name: string;
    @Field({ description: "Playing song", nullable: true })
    playing: Song;
    @Field(type => [Song], { description: "Queque Songs" })
    queque: Song[]
}