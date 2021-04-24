import { AlbumResolver } from './AlbumResolver';
import { AlbumDTO } from "../../app-litzer/album/dto/album.dto";

const albums: AlbumDTO[] = [{
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

const service = {

    async findAll(): Promise<AlbumDTO[]> {
        return await albums
    },
    async findById(id: string): Promise<AlbumDTO> {
        return await albums[0]
    }

}

test('Find all Albums', async () => {
    const resolver = new AlbumResolver(service)
    const albums = await resolver.albums()
    expect(albums.length).toEqual(2)
})

test('Find Album by id', async () => {
    const resolver = new AlbumResolver(service)
    const album = await resolver.albumById('1')
    expect(album.id).toEqual('1')
})