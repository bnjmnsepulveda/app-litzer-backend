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

const SongService = {
    async findById(id: string) {
        return await songs.find(s => s.id === id)
    }
}

export default SongService
