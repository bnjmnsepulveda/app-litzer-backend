import { AlbumModel } from '../model/album.model';
import AlbumService from './album.service';

const albums: AlbumModel[] = [{
    id: '1',
    name: 'runaway',
    artist: 'bon jovi',
    img: 'img.jpg',
    songs: [
        {
            id: '1',
            name: 'runaway',
            duration: '1:00'
        }
    ]
},
{
    id: '2',
    name: 'frontiers',
    artist: 'journey',
    img: 'img.jpg',
    songs: [
        {
            id: '1',
            name: 'separate ways',
            duration: '1:00'
        }
    ]
}
]

const repository = {
    async findAll() {
        return await albums
    },
    async findById(id: string) {
        return await albums[0]
    }
}

const service = new AlbumService(repository)

test('Find album by id', async () => {
    const album = await service.findById('1')
    expect(album.name).toEqual('runaway')
})

test('Find all album ', async () => {
    const albums = await service.findAll()
    expect(albums.length).toEqual(2)
})