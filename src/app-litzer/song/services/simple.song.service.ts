import { Service, Inject } from "typedi";
import SongRepository from "../repositories/song.repository";
import { SongDTO } from "../dto/song.dto";
import SongService from "./song.service";
import InMemorySongRepository from "../repositories/in-memory.song.repository";


@Service()
class SimpleSongService implements SongService {

    constructor(@Inject(() => InMemorySongRepository) private songRepository: SongRepository) { }

    async findById(id: string): Promise<SongDTO> {
        const song = await this.songRepository.findById(id)
        if (song) {
            return song;
        }
        throw Error(`Song id ${id} not found`)
    }

}

export default SimpleSongService
