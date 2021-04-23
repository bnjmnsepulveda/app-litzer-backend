import { Song } from '../../../graphql/schema/types/Song';
import { Album } from '../../../graphql/schema/types/Album';
import { Service } from 'typedi';

const buildAlbum = (props: any) => {
    const album = new Album()
    album.id = props.id
    album.name = props.name
    album.artist = props.artist
    album.img = props.img
    album.songs = buildSongs()
    return album
}

const buildSongs = () => {
    let s1 = new Song()
    s1.id = '1'
    s1.name = 'Runaway'
    s1.duration = '3:30'

    let s2 = new Song()
    s2.id = '2'
    s2.name = 'Separate ways'
    s2.duration = '4:50'

    let s3 = new Song()
    s3.id = '3'
    s3.name = 'Raise on rock'
    s3.duration = '3:37'

    let s4 = new Song()
    s4.id = '4'
    s4.name = 'Mighty wings'
    s4.duration = '2:08'

    let s5 = new Song()
    s5.id = '5'
    s5.name = 'Be yourself'
    s5.duration = '5:32'

    let s6 = new Song()
    s6.id = '6'
    s6.name = 'Wasted years'
    s6.duration = '7:37'

    return [
        s1, s2, s3, s4, s5, s6
    ]

}

const albums = [
    buildAlbum({
        id: '1',
        img: 'https://images-na.ssl-images-amazon.com/images/I/41X8BFZD2WL.jpg',
        artist: 'Bon Jovi',
        name: 'Runnaway',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '2',
        img: 'https://images-na.ssl-images-amazon.com/images/I/818W3I9zksL.jpg',
        artist: 'Journey',
        name: 'Greatests Hits',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '3',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71wO5zSNFNL._SX466_.jpg',
        artist: 'Trivium',
        name: 'Ascendancy',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '4',
        img: 'https://www.todorock.com/wp-content/uploads/2019/09/judas-priest-painkiller-grande-1200x900.jpg',
        artist: 'Judas Priest',
        name: 'Painkiller',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '5',
        img: 'https://http2.mlstatic.com/D_NQ_NP_756859-MLC42530810011_072020-O.jpg',
        artist: 'Dio',
        name: 'Holy Diver',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '6',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71uysK6I3pL._SL1060_.jpg',
        artist: 'Nightwish',
        name: 'Once',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '7',
        img: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/5/9/0/9/31266.jpg',
        artist: 'Five Finger Death Punch',
        name: 'Greatests hits',
        songs: buildSongs()
    }),
    buildAlbum({
        id: '8',
        img: 'https://images-na.ssl-images-amazon.com/images/I/81gcQXWNsYL._SL1425_.jpg',
        artist: 'Disturbed',
        name: 'Inmortalized',
        songs: buildSongs()
    })
]

@Service()
class AlbumService {

    async findAll() {
        return await albums
    }

    async findById(id: string) {
        return await albums.find(a => a.id === id)
    }

}
export default AlbumService