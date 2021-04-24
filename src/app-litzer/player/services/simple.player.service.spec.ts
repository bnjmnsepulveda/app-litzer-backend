import { AddSongDTO } from '../dto/add-song.dto';
import SimplePlayerService from './simple.player.service';

test('create a player', async () => {
    const service = new SimplePlayerService()
    const created = await service.create('player-test')
    expect(created).toBeDefined()
    expect(service.players.length).toEqual(1)
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
    expect(service.players[0].queque.length).toEqual(1)
})