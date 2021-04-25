import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Song Schema" })
export class SongAddedNotification {
    @Field(type => String, { description: "Player id" })
    playerId: string;
    @Field(type => String, { description: "Song id" })
    songId: string;
    @Field({ description: "Datetime when song was added" })
    addedAt: Date;
    @Field({ description: "Song name" })
    name: string;
    @Field({ description: "url file track" })
    url: string;
}

export interface SongAddedNotificationPayload {
    playerId: string;
    addedAt: Date;
    songId: string;
    name: string;
    url: string;
}