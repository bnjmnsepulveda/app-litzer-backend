import { ObjectType, Field } from "type-graphql";
import { Song } from "./Song";

@ObjectType({ description: "Song Schema" })
export class SongAddedNotification {
    @Field(type => String)
    playerId: string;
    @Field(type => Song, { description: "Song Added" })
    song: Song
}

export interface SongAddedNotificationPayload {
    playerId: string;
    song: {
        id: string;
        name: string;
        duration: string;
        url?: string;
    }
}