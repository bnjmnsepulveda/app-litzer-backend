
export interface AlbumModel {
    id: string;
    name: string;
    artist: string;
    img: string;
    songs: Song[]
}

export interface Song {
    id: string;
    name: string;
    duration: string;
    url?: string;
}