
export interface PlayerDTO {
    id: string;
    name: string;
    playlist: PlaylistSongDTO[];
}

export interface PlaylistSongDTO {
    id: string;
    addedAt: Date;
    name: string;
    url?: string;
}