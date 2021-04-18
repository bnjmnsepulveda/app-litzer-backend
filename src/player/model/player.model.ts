
export interface PlayerModel {
    id: string;
    name: string;
    isPlaying: boolean;
    playing?: PlayerSongModel;
    queque: PlayerSongModel[];
}

export interface PlayerSongModel {
    id: string;
    name: string;
    duration: string;
    url?: string;
}