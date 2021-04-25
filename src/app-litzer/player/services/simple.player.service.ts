import { AddSongDTO } from '../dto/add-song.dto';
import { v4 as uuidv4 } from 'uuid';
import { Service, Inject } from 'typedi';
import { PlayerDTO, PlaylistSongDTO } from '../dto/player.dto';
import PlayerNotFoundError from '../errors/player-not-found.error';
import InMemoryPlayerRepository from '../repositories/in-memory.player.repository';
import PlayerRepository from '../repositories/player.repository';
import { PlaylistSongModel } from '../model/player.model';

@Service()
class SimplePlayerService {

    constructor(
        @Inject(() => InMemoryPlayerRepository) private playerRepsoitory: PlayerRepository
    ) { }

    async create(name: string): Promise<PlayerDTO> {
        const id = uuidv4()
        const player = await this.playerRepsoitory.create({
            id,
            name,
            playlist: []
        })
        return await player
    }

    async findById(id: string): Promise<PlayerDTO> {
        const player = await this.playerRepsoitory.findById(id)
        if (!player) {
            throw new PlayerNotFoundError(`Player id ${id} not found`)
        }
        return player
    }

    async addSong(addSong: AddSongDTO): Promise<PlaylistSongDTO> {
        const player = await this.playerRepsoitory.findById(addSong.playerId)
        if (!player) {
            throw new PlayerNotFoundError(`Player id ${addSong.playerId} not found`)
        }
        const song: PlaylistSongModel = {
            id: addSong.songId,
            addedAt: new Date(),
            name: addSong.songName,
            url: addSong.songUrl
        }
        player.playlist.push(song)
        this.playerRepsoitory.update(player)
        return song
    }

}

export default SimplePlayerService