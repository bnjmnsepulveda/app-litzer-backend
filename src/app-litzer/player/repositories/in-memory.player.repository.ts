import PlayerRepository from "./player.repository";
import { PlayerModel } from "../model/player.model";
import { Service } from "typedi";

@Service()
class InMemoryPlayerRepository implements PlayerRepository {

    private players: PlayerModel[] = []

    async create(player: PlayerModel): Promise<PlayerModel> {
        this.players.push(player)
        return await player
    }

    async findById(id: string): Promise<PlayerModel> {
        return await this.players.find(p => p.id === id)
    }

    async update(player: PlayerModel): Promise<PlayerModel> {
        const index = this.players.findIndex(p => p.id === player.id)
        this.players[index] = player
        return await player
    }

}

export default InMemoryPlayerRepository