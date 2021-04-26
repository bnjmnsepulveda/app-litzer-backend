import { AddSongDTO } from '../dto/add-song.dto';
import { v4 as uuidv4 } from 'uuid';
import { Service, Inject } from 'typedi';
import { PlayerDTO, PlaylistSongDTO } from '../dto/player.dto';
import PlayerNotFoundError from '../errors/player-not-found.error';
import InMemoryPlayerRepository from '../repositories/in-memory.player.repository';
import PlayerRepository from '../repositories/player.repository';
import { PlaylistSongModel } from '../model/player.model';
import PlayerService from './player.service';

@Service()
class SimplePlayerService implements PlayerService {

    constructor(
        @Inject(() => InMemoryPlayerRepository) private playerRepository: PlayerRepository
    ) { }

    async create(name: string): Promise<PlayerDTO> {
        const id = uuidv4()
        const player = await this.playerRepository.create({
            id,
            name,
            playingNow: null,
            playlist: []
        })
        return await player
    }

    async findById(id: string): Promise<PlayerDTO> {
        const player = await this.playerRepository.findById(id)
        if (!player) {
            throw new PlayerNotFoundError(`Player id ${id} not found`)
        }
        return player
    }

    async addSong(addSong: AddSongDTO): Promise<PlaylistSongDTO> {
        const player = await this.findById(addSong.playerId)
        const song: PlaylistSongModel = {
            id: addSong.songId,
            addedAt: new Date(),
            name: addSong.songName,
            url: addSong.songUrl
        }
        player.playlist.push(song)
        this.playerRepository.update(player)
        return song
    }

    async nextSongToPlay(playerId: string): Promise<PlaylistSongDTO> {
        const player = await this.findById(playerId)
        player.playingNow = player.playlist.shift()
        await this.playerRepository.update(player)
        if (!player.playingNow) {
            console.log(`Playlist player id ${playerId} is empty`)
        }
        return await player.playingNow
    }


}

export default SimplePlayerService