
export interface PlayerDTO {
    id: string;
    name: string;
    playingNow: PlaylistSongDTO;
    playlist: PlaylistSongDTO[];
}

export interface PlaylistSongDTO {
    id: string;
    addedAt: Date;
    name: string;
    url: string;
}