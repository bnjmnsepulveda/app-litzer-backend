import { SongModel } from "../model/song.model";

interface SongRepository {

    findById(id: string): Promise<SongModel> | undefined;

}

export default SongRepository