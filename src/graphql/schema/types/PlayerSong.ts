import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "PlayerSong Schema" })
export class PlayerSong {
    @Field(type => ID)
    id: string;
    @Field({ description: "Song name" })
    name: string;
    @Field({ description: "url file track" })
    url: string;
}