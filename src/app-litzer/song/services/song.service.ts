import { Service } from "typedi";
import SongRepository from "../repositories/song.repository";
import { SongDTO } from "../dto/song.dto";


@Service()
class SongService {

    constructor(private songRepository: SongRepository) { }

    async findById(id: string): Promise<SongDTO> {
        const song = await this.songRepository.findById(id)
        if (song) {
            return song;
        }
        throw Error(`Song id ${id} not found`)
    }

}

export default SongService
