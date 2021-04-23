import { Song } from "../../song/dto/song";

export interface Album {
    id: string;
    name: string;
    artist: string;
    img: string;
    songs: Song[]
}