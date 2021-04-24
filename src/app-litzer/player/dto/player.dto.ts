
export interface PlayerDTO {
    id: string;
    name: string;
    isPlaying: boolean;
    playing?: PlayerSongDTO;
    queque?: PlayerSongDTO[];
}

export interface PlayerSongDTO {
    id: string;
    name: string;
    duration: string;
    url?: string;
}