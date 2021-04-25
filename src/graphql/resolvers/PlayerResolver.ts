import "reflect-metadata";
import { AddSongInput } from './../schema/inputs/AddSongInput';
import { Resolver, Query, Arg, Mutation, Subscription, Root, PubSub, Publisher } from "type-graphql";
import { Player } from "../schema/types/Player";
import SimpleSongService from "../../app-litzer/song/services/simple.song.service";
import { Song } from "../schema/types/Song";
import PlayerService from "../../app-litzer/player/services/player.service";
import { Service, Inject } from "typedi";
import SimplePlayerService from "../../app-litzer/player/services/simple.player.service";
import SongService from "../../app-litzer/song/services/song.service";
import { SongAddedNotification, SongAddedNotificationPayload } from "../schema/types/SongAddedNotification";

@Service()
@Resolver(Player)
export class PlayerResolver {

    constructor(
        @Inject(() => SimplePlayerService) private playerService: PlayerService,
        @Inject(() => SimpleSongService) private songService: SongService
    ) { }

    @Mutation(returns => Player, { description: 'Create a new Player' })
    async createPlayer(@Arg('name') name: string) {
        return await this.playerService.create(name)
    }

    @Query(returns => Player, { description: 'Player running', nullable: true })
    async playerById(@Arg('id') id: string) {
        return await this.playerService.findById(id)
    }

    @Mutation(returns => Song, { description: 'Song added to playlist' })
    async addSong(
        @Arg('AddSongInput') addSongInput: AddSongInput,
        @PubSub('SONG_ADDED_NOTIFICATION') publish: Publisher<SongAddedNotificationPayload>
    ) {

        const song = await this.songService.findById(addSongInput.songId)

        const songAdded = await this.playerService.addSong({
            playerId: addSongInput.playerId,
            songId: song.id,
            songName: song.name,
            songDuration: song.duration,
            songUrl: song.url
        })

        publish({
            playerId: addSongInput.playerId,
            addedAt: new Date(),
            song: songAdded
        })

        return songAdded
    }

    @Subscription({
        topics: 'SONG_ADDED_NOTIFICATION',
        filter: ({ payload, args }) => args.playerId === payload.playerId
    })
    songAddedNotification(
        @Root() payload: SongAddedNotificationPayload,
        @Arg('playerId') playerId: string
    ): SongAddedNotification {
        return payload
    }

}