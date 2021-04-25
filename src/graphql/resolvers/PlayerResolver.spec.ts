import { PlayerResolver } from './PlayerResolver';
import { AddSongDTO } from '../../app-litzer/player/dto/add-song.dto';
import { PlayerDTO, PlaylistSongDTO } from '../../app-litzer/player/dto/player.dto';
import { SongDTO } from '../../app-litzer/song/dto/song.dto';
import { SongAddedNotificationPayload } from '../schema/types/SongAddedNotification';

describe('PlayerResolver', () => {

    const playerService = {
        async create(name: string): Promise<PlayerDTO> {
            return await {
                id: 'player',
                name,
                playlist: []
            }
        },
        async findById(id: string): Promise<PlayerDTO> {
            return await {
                id,
                name: 'player-test',
                playlist: []
            }
        },
        async addSong(addSong: AddSongDTO): Promise<PlaylistSongDTO> {
            return {
                addedAt: new Date(),
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
        const input = {
            playerId: 'player-id',
            songId: 'song-id'
        }
        const publishMock = async (payload: SongAddedNotificationPayload) => {
            expect(payload.playerId).toEqual(input.playerId)
            expect(payload.songId).toEqual(input.songId)
        }
        const song = await resolver.addSong(input, publishMock)
        expect(song.id).toEqual('song-id')
        expect(song.name).toEqual('runaway')
    })

})
