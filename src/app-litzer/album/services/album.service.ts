import { Album } from '../dto/album.dto';

interface AlbumService {

    findAll(): Promise<Album[]>;

    findById(id: string): Promise<Album>;

}

export default AlbumService