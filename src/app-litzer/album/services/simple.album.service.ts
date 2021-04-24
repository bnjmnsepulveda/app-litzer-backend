import { AlbumDTO } from '../dto/album.dto';
import { Service, Inject } from 'typedi';
import InMemoryAlbumRepository from '../repositories/in-memory.album.repository';
import AlbumRepository from '../repositories/album.repository';
import AlbumService from './album.service';
import AlbumNotFoundError from '../errors/album-not-found.error';

@Service()
class SimpleAlbumService implements AlbumService {

    constructor(@Inject(() => InMemoryAlbumRepository) private albumRepository: AlbumRepository) { }

    async findAll(): Promise<AlbumDTO[]> {
        return await this.albumRepository.findAll()
    }

    async findById(id: string): Promise<AlbumDTO> {
        const album = await this.albumRepository.findById(id)
        if (album) {
            return album
        }
        throw new AlbumNotFoundError(`Album id ${id} not found`)
    }

}
export default SimpleAlbumService