import "reflect-metadata";
import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Player } from "../schema/types/Player";
import SongService from "../../app-litzer/song/services/song.service";
import { Song } from "../schema/types/Song";
import PlayerService from "../../app-litzer/player/services/player.service";
import { Service } from "typedi";

@Service()
@Resolver(Player)
export class PlayerResolver {

    constructor(
        private playerService: PlayerService,
        private songService: SongService
    ) { }

    @Mutation(returns => Player, { description: 'Create a new Player' })
    async createPlayer(@Arg('name') name: string) {
        return await this.playerService.save(name)
    }

    @Query(returns => Player, { description: 'Player running', nullable: true })
    async playerById(@Arg('id') id: string) {
        return await this.playerService.findById(id)
    }

    @Mutation(returns => Song, { description: 'Song added to playlist' })
    async addSong(@Arg('playerId') playerId: string, @Arg('songId') songId: string) {
        const song = await this.songService.findById(songId)
        if (!song) {
            throw new Error(`Song id ${songId} not found`)
        }
        return await this.playerService.addSong({
            playerId,
            songId: song.id,
            songName: song.name,
            songDuration: song.duration,
            songUrl: song.url
        })
    }


}