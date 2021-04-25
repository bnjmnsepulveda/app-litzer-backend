import { PlayerModel, PlaylistSongModel } from "../model/player.model";

export default interface PlayerRepository {

    create(player: PlayerModel): Promise<PlayerModel> | undefined;

    findById(id: string): Promise<PlayerModel> | undefined;

    update(player: PlayerModel): Promise<PlayerModel> | undefined;

}