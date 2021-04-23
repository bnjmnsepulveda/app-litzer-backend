
export interface Player {
    id: string;
    name: string;
    isPlaying: boolean;
    playing?: PlayerSong;
    queque?: PlayerSong[];
}

export interface PlayerSong {
    id: string;
    name: string;
    duration: string;
    url?: string;
}