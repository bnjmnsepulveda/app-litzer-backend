import { Song } from "../../song/dto/song.dto";

export interface Album {
    id: string;
    name: string;
    artist: string;
    img: string;
    songs: Song[]
}