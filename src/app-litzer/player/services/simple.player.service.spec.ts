import { AddSongDTO } from '../dto/add-song.dto';
import SimplePlayerService from './simple.player.service';
import PlayerNotFoundError from '../errors/player-not-found.error';

test('create a player', async () => {
    const service = new SimplePlayerService()
    const created = await service.create('player-test')
    expect(created).toBeDefined()
})

test('find player by id', async () => {
    const service = new SimplePlayerService()
    const created = await service.create('player-test')
    expect(created).toBeDefined()
    const finded = await service.findById(created.id)
    expect(finded.id).toEqual(created.id)
})

test('add song to player', async () => {
    const service = new SimplePlayerService()
    const created = await service.create('player-test')
    expect(created).toBeDefined()
    const addSong: AddSongDTO = {
        playerId: created.id,
        songDuration: '1:00',
        songId: '1',
        songName: 'separate ways',
        songUrl: 'journey.com/separate-ways'
    }
    const songAdded = await service.addSong(addSong)
    expect(songAdded.id).toEqual('1')
    expect(service.players[1].queque.length).toEqual(1)
})


test('throw a PlayerNotFoundError', async () => {
    const service = new SimplePlayerService()
    expect(async () => await service.findById('not-found')).rejects.toThrow(PlayerNotFoundError)
    expect(async () => await service.addSong({
        playerId: 'not-found',
        songDuration: '--',
        songId: 'id',
        songName: 'any song',
        songUrl: '--'
    })).rejects.toThrow(PlayerNotFoundError)
})