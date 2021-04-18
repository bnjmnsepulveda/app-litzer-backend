import { AddSongDTO } from './../dto/add-song.dto';
import { PlayerModel, PlayerSongModel } from "../model/player.model";
import { v4 as uuidv4 } from 'uuid';

const players: PlayerModel[] = []

const PlayerService = {

    async save(name: string) {
        const id = uuidv4()
        const player = {
            id,
            name,
            isPlaying: false,
            queque: []
        }
        players.push(player)
        return await player
    },

    async findById(id: string) {
        return await players.find(p => p.id === id)
    },

    async addSong(addSong: AddSongDTO) {
        for (let x = 0; x < players.length; x++) {
            if (players[x].id === addSong.playerId) {
                const song: PlayerSongModel = {
                    id: addSong.songId,
                    name: addSong.songName,
                    duration: addSong.songDuration,
                    url: addSong.songUrl
                }
                players[x].queque.push(song)
                return song
            }
        }
    }

}

export default PlayerService