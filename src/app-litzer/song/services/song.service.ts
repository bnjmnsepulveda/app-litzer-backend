import { SongDTO } from "../dto/song.dto";

interface SongService {

    findById(id: string): Promise<SongDTO>;

}

export default SongService
