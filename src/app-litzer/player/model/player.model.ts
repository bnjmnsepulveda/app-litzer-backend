
export interface PlayerModel {
    id: string;
    name: string;
    playingNow: PlaylistSongModel;
    playlist: PlaylistSongModel[];
}

export interface PlaylistSongModel {
    id: string;
    addedAt: Date;
    name: string;
    url: string;
}