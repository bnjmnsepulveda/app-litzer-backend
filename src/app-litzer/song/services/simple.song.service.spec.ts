import SimpleSongService from "./simple.song.service";
import SongNotFoundError from "../errors/song-not-found.error";

test('Find a song by id', async () => {
    const repository = {
        async findById(id: string) {
            return await {
                id: '1',
                name: 'runaway',
                duration: '1:00',
                url: 'video.avi'
            }
        }
    }

    const service = new SimpleSongService(repository)
    const song = await service.findById('1')
    expect(song).toBeDefined()
    expect(song.name).toEqual('runaway')
})

test('Throw error when song is not found by given id', async () => {
    const repository = {
        async findById(id: string) {
            if (true)
                return await undefined
            else
                return {
                    id: '1',
                    name: 'runaway',
                    duration: '1:00',
                    url: 'video.avi'
                }
        }
    }

    const service = new SimpleSongService(repository)
    const asyncFindById = async () => await service.findById('not-found-id')
    expect(asyncFindById).rejects.toThrow(SongNotFoundError)

})
