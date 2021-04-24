import { Album } from '../dto/album.dto';
import { Service, Inject } from 'typedi';
import InMemoryAlbumRepository from '../repositories/in-memory.album.repository';
import AlbumRepository from '../repositories/album.repository';
import AlbumService from './album.service';

@Service()
class SimpleAlbumService implements AlbumService {

    constructor(@Inject(() => InMemoryAlbumRepository) private albumRepository: AlbumRepository) { }

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
export default SimpleAlbumService