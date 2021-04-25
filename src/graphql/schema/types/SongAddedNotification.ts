import { ObjectType, Field } from "type-graphql";

@ObjectType({ description: "Song Schema" })
export class SongAddedNotification {
    @Field(type => String)
    playerId: string;
    @Field(type => String)
    songId: string;
    @Field()
    addedAt: Date;
    @Field({ description: "Song name" })
    name: string;
    @Field({ description: "url file track", nullable: true })
    url?: string;
}

export interface SongAddedNotificationPayload {
    playerId: string;
    addedAt: Date;
    songId: string;
    name: string;
    url?: string;
}