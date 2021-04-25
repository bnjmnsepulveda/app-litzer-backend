import { ObjectType, Field, ID } from "type-graphql";
import { PlayerSong } from "./PlayerSong";

@ObjectType({ description: "Player Schema" })
export class Player {
    @Field(type => ID)
    id: string;
    @Field({ description: "Player name" })
    name: string;
    @Field({ description: "Playing song", nullable: true })
    playingNow: PlayerSong;
    @Field(type => [PlayerSong], { description: "Queque Songs" })
    playlist: PlayerSong[]
}