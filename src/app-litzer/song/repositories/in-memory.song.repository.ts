import { Service } from "typedi";
import { SongModel } from "../model/song.model";

@Service()
class InMemorySongRepository {

    private songs: SongModel[] = [
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
    ];

    async findById(id: string): Promise<SongModel> | undefined {
        return await this.songs.find(s => s.id === id)
    }
}

export default InMemorySongRepository