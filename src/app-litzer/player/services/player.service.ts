import { AddSongDTO } from '../dto/add-song.dto';
import { PlayerDTO, PlayerSongDTO } from '../dto/player.dto';

interface PlayerService {

    create(name: string): Promise<PlayerDTO>;

    findById(id: string): Promise<PlayerDTO>;

    addSong(addSong: AddSongDTO): Promise<PlayerSongDTO>;

}

export default PlayerService