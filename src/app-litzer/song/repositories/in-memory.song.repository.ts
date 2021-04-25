import { Service, Inject } from "typedi";
import { SongModel } from "../model/song.model";

@Service()
class InMemorySongRepository {

    @Inject('songs.data')
    private songs: SongModel[];

    async findById(id: string): Promise<SongModel> | undefined {
        return await this.songs.find(s => s.id === id)
    }
}

export default InMemorySongRepository