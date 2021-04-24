import { AlbumResolver } from './AlbumResolver';
import { Album } from "../../app-litzer/album/dto/album.dto";
import AlbumService from '../../app-litzer/album/services/album.service';

const albums: Album[] = [{
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

class Service extends AlbumService {
    constructor() {
        super(null)
    }
    async findAll(): Promise<Album[]> {
        return await albums
    }

    async findById(id: string): Promise<Album> {
        return await albums[0]
    }
}

const service = new Service()

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