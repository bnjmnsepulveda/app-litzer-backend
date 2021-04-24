import { AddSongDTO } from '../dto/add-song.dto';
import { PlayerModel, PlayerSongModel } from "../model/player.model";
import { v4 as uuidv4 } from 'uuid';
import { Service } from 'typedi';
import { PlayerDTO, PlayerSongDTO } from '../dto/player.dto';
import PlayerNotFoundError from '../errors/player-not-found.error';

@Service()
class SimplePlayerService {

    players: PlayerModel[] = [{
        id: 'default',
        isPlaying: false,
        name: 'Simple Rock Player',
        queque: []
    }]

    async create(name: string): Promise<PlayerDTO> {
        const id = uuidv4()
        const queque: PlayerSongModel[] = []
        const player = {
            id,
            name,
            isPlaying: false,
            queque: queque
        }
        this.players.push(player)
        return await player
    }

    async findById(id: string): Promise<PlayerDTO> {
        const player = await this.players.find(p => p.id === id)
        if (!player) {
            throw new PlayerNotFoundError(`Player id ${id} not found`)
        }
        return player
    }

    async addSong(addSong: AddSongDTO): Promise<PlayerSongDTO> {
        const index = this.players.findIndex(p => p.id === addSong.playerId)
        if (index === -1) {
            throw new PlayerNotFoundError(`Player id ${addSong.playerId} not found`)
        }
        const song: PlayerSongModel = {
            id: addSong.songId,
            name: addSong.songName,
            duration: addSong.songDuration,
            url: addSong.songUrl
        }
        this.players[index].queque.push(song)
        return song
    }

}

export default SimplePlayerService