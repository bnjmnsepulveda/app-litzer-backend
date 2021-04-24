import { AddSongDTO } from '../dto/add-song.dto';
import { PlayerModel, PlayerSongModel } from "../model/player.model";
import { v4 as uuidv4 } from 'uuid';
import { Service } from 'typedi';
import { PlayerDTO, PlayerSongDTO } from '../dto/player.dto';

@Service()
class SimplePlayerService {

    players: PlayerModel[] = []

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
        return await this.players.find(p => p.id === id)
    }

    async addSong(addSong: AddSongDTO): Promise<PlayerSongDTO> {
        for (let x = 0; x < this.players.length; x++) {
            if (this.players[x].id === addSong.playerId) {
                const song: PlayerSongModel = {
                    id: addSong.songId,
                    name: addSong.songName,
                    duration: addSong.songDuration,
                    url: addSong.songUrl
                }
                this.players[x].queque.push(song)
                return song
            }
        }
    }

}

export default SimplePlayerService