import { Service } from "typedi";
import SongRepository from "../repositories/song.repository";


@Service()
class SongService {

    constructor(private songRepository: SongRepository) { }

    async findById(id: string) {
        return await this.songRepository.findById(id)
    }

}

export default SongService
