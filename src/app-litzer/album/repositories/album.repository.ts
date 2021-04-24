import { AlbumModel } from "../model/album.model";

interface AlbumRepository {

    findAll(): Promise<AlbumModel[]> | undefined;

    findById(id: string): Promise<AlbumModel> | undefined;

}

export default AlbumRepository;