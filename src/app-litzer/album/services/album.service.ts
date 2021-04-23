import { Album } from '../dto/album.dto';
import { Service } from 'typedi';
import Albumrepository from '../repositories/album.repository';

@Service()
class AlbumService {

    constructor(private albumRepository: Albumrepository) { }

    async findAll(): Promise<Album[]> {
        return await this.albumRepository.findAll()
    }

    async findById(id: string): Promise<Album> {
        const album = await this.albumRepository.findById(id)
        if (album) {
            return album
        }
        throw Error(`Album id ${id} not found`)
    }

}
export default AlbumService