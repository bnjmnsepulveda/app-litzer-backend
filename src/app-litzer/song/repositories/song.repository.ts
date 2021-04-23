import { Service } from "typedi";
import { SongModel } from "../model/song.model";


const songs: SongModel[] = [
    {
        id: '1',
        name: 'runnaway',
        duration: '2:37',
        url: ''
    },
    {
        id: '2',
        name: 'separate ways',
        duration: '2:37',
        url: ''
    },
    {
        id: '3',
        name: 'push it to the limit',
        duration: '2:37',
        url: ''
    }
]

@Service()
class SongRepository {
    async findById(id: string): Promise<SongModel> {
        return await songs.find(s => s.id === id)
    }
}

export default SongRepository