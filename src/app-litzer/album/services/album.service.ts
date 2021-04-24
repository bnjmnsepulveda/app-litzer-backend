import { AlbumDTO } from '../dto/album.dto';

interface AlbumService {

    findAll(): Promise<AlbumDTO[]>;

    findById(id: string): Promise<AlbumDTO>;

}

export default AlbumService