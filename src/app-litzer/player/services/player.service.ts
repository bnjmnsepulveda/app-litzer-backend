import { AddSongDTO } from '../dto/add-song.dto';
import { PlayerModel, PlayerSongModel } from "../model/player.model";
import { v4 as uuidv4 } from 'uuid';
import { Service } from 'typedi';
import { Player, PlayerSong } from '../dto/player.dto';

@Service()
class PlayerService {

    players: PlayerModel[] = []

    async create(name: string): Promise<Player> {
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

    async findById(id: string): Promise<Player> {
        return await this.players.find(p => p.id === id)
    }

    async addSong(addSong: AddSongDTO): Promise<PlayerSong> {
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

export default PlayerService