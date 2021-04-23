import { AlbumModel } from './../model/album.model';
import { Service } from "typedi";

const buildSongs = () => {
    return [
        {
            id: '1',
            name: 'Runaway',
            duration: '3:30'
        },
        {
            id: '2',
            name: 'Separate ways',
            duration: '3:30'
        },
        {
            id: '3',
            name: 'Push it to the limit',
            duration: '3:30'
        }
    ]

}

const albums = [
    {
        id: '1',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41X8BFZD2WL.jpg',
        artist: 'Bon Jovi',
        name: 'Runnaway',
        songs: buildSongs()
    },
    {
        id: '2',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818W3I9zksL.jpg',
        artist: 'Journey',
        name: 'Greatests Hits',
        songs: buildSongs()
    },
    {
        id: '3',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71wO5zSNFNL._SX466_.jpg',
        artist: 'Trivium',
        name: 'Ascendancy',
        songs: buildSongs()
    },
    {
        id: '4',
        img: 'https://www.todorock.com/wp-content/uploads/2019/09/judas-priest-painkiller-grande-1200x900.jpg',
        artist: 'Judas Priest',
        name: 'Painkiller',
        songs: buildSongs()
    },
    {
        id: '5',
        img: 'https://http2.mlstatic.com/D_NQ_NP_756859-MLC42530810011_072020-O.jpg',
        artist: 'Dio',
        name: 'Holy Diver',
        songs: buildSongs()
    },
    {
        id: '6',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71uysK6I3pL._SL1060_.jpg',
        artist: 'Nightwish',
        name: 'Once',
        songs: buildSongs()
    },
    {
        id: '7',
        img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/5/9/0/9/31266.jpg',
        artist: 'Five Finger Death Punch',
        name: 'Greatests hits',
        songs: buildSongs()
    },
    {
        id: '8',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81gcQXWNsYL._SL1425_.jpg',
        artist: 'Disturbed',
        name: 'Inmortalized',
        songs: buildSongs()
    }
]

@Service()
class AlbumRepository {
    async findAll(): Promise<AlbumModel[]> | undefined {
        return await albums
    }

    async findById(id: string): Promise<AlbumModel> | undefined {
        return await albums.find(a => a.id === id)
    }
}
export default AlbumRepository