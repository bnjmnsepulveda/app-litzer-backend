import { SongDTO } from "../../song/dto/song.dto";

export interface AlbumDTO {
    id: string;
    name: string;
    artist: string;
    img: string;
    songs: SongDTO[]
}