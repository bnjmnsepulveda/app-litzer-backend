import { PlayerResolver } from './PlayerResolver';
import { AddSongDTO } from '../../app-litzer/player/dto/add-song.dto';
import { PlayerDTO, PlayerSongDTO } from '../../app-litzer/player/dto/player.dto';
import { SongDTO } from '../../app-litzer/song/dto/song.dto';

describe('PlayerResolver', () => {

    const playerService = {
        async create(name: string): Promise<PlayerDTO> {
            return await {
                id: 'player',
                isPlaying: false,
                name,
            }
        },
        async findById(id: string): Promise<PlayerDTO> {
            return await {
                id,
                isPlaying: false,
                name: 'player-test',
            }
        },
        async addSong(addSong: AddSongDTO): Promise<PlayerSongDTO> {
            return {
                duration: '1:00',
                id: addSong.songId,
                name: 'runaway'
            }
        }
    }
    const songService = {

        async findById(id: string): Promise<SongDTO> {
            return await {
                duration: '1:00',
                id,
                name: 'runaway'
            }
        }
    }
    const resolver = new PlayerResolver(playerService, songService)

    it('create a player', async () => {
        const player = await resolver.createPlayer('my-player')
        expect(player.name).toEqual('my-player')
    })

    it('find by id', async () => {
        const player = await resolver.playerById('1')
        expect(player.id).toEqual('1')
    })
    it('add song', async () => {
        const song = await resolver.addSong('player-id', 'song-id')
        expect(song.id).toEqual('song-id')
        expect(song.name).toEqual('runaway')
    })

})
