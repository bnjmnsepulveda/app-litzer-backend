import { AddSongDTO } from '../dto/add-song.dto';
import SimplePlayerService from './simple.player.service';
import PlayerNotFoundError from '../errors/player-not-found.error';
import PlayerRepository from '../repositories/player.repository';
import { PlayerModel } from '../model/player.model';

test('create a player', async () => {
    const repository: PlayerRepository = {
        async findById(id: string) {
            throw Error()
        },
        async create(p: PlayerModel) {
            return await p
        },
        update(p: PlayerModel) {
            throw Error()
        }
    }
    const service = new SimplePlayerService(repository)
    const created = await service.create('player-test')
    expect(created).toBeDefined()
})

test('find player by id', async () => {
    const repository: PlayerRepository = {
        async findById(id: string) {
            return await {
                id,
                name: 'player-test',
                playlist: []
            }
        },
        async create(p: PlayerModel) {
            return await p
        },
        update(p: PlayerModel) {
            throw Error()
        }
    }
    const service = new SimplePlayerService(repository)
    const created = await service.create('player-test')
    expect(created).toBeDefined()
    const finded = await service.findById(created.id)
    expect(finded.id).toEqual(created.id)
})

test('add song to player', async () => {
    const repository: PlayerRepository = {
        async findById(id: string) {
            return await {
                id,
                name: 'player-test',
                playlist: []
            }
        },
        async create(p: PlayerModel) {
            return await p
        },
        async update(p: PlayerModel) {
            return await p
        }
    }
    const service = new SimplePlayerService(repository)
    const created = await service.create('player-test')
    expect(created).toBeDefined()
    const addSong: AddSongDTO = {
        playerId: created.id,
        songId: '1',
        songName: 'separate ways',
        songUrl: 'journey.com/separate-ways'
    }
    const songAdded = await service.addSong(addSong)
    expect(songAdded.id).toEqual('1')
})


test('throw a PlayerNotFoundError', async () => {
    const repository: PlayerRepository = {
        async findById(id: string) {
            return await undefined
        },
        create(p: PlayerModel) {
            throw Error()
        },
        update(p: PlayerModel) {
            throw Error()
        }
    }
    const service = new SimplePlayerService(repository)
    expect(async () => await service.findById('not-found')).rejects.toThrow(PlayerNotFoundError)
    expect(async () => await service.addSong({
        playerId: 'not-found',
        songId: 'id',
        songName: 'any song',
        songUrl: '--'
    })).rejects.toThrow(PlayerNotFoundError)
})