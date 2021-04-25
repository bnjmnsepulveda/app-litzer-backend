import { AlbumModel } from '../model/album.model';
import { Service, Inject } from "typedi";
import AlbumRepository from './album.repository';


@Service()
class InMemoryAlbumRepository implements AlbumRepository {

    @Inject('albums.data')
    private albums: AlbumModel[]

    async findAll(): Promise<AlbumModel[]> | undefined {
        return await this.albums
    }

    async findById(id: string): Promise<AlbumModel> | undefined {
        return await this.albums.find(a => a.id === id)
    }
}
export default InMemoryAlbumRepository