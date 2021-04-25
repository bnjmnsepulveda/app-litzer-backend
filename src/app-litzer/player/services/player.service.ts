import { AddSongDTO } from '../dto/add-song.dto';
import { PlayerDTO, PlaylistSongDTO } from '../dto/player.dto';

interface PlayerService {

    create(name: string): Promise<PlayerDTO>;

    findById(id: string): Promise<PlayerDTO>;

    addSong(addSong: AddSongDTO): Promise<PlaylistSongDTO>;

}

export default PlayerService