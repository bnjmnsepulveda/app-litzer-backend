
export interface PlayerModel {
    id: string;
    name: string;
    playlist: PlaylistSongModel[];
}

export interface PlaylistSongModel {
    id: string;
    addedAt: Date;
    name: string;
    url: string;
}