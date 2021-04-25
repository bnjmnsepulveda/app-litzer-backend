import { InputType, Field } from "type-graphql";

@InputType()
export class AddSongInput {

    @Field()
    playerId: string;

    @Field()
    songId: string;
}