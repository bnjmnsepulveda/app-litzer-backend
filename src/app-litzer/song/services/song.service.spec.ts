import SongService from "./song.service";

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

const service = new SongService(repository)

test('Find a song by id', async () => {
    const song = await service.findById('1')
    expect(song).toBeDefined()
    expect(song.name).toEqual('runaway')
})
