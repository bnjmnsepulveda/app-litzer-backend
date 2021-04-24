import "reflect-metadata";
import { Album } from '../schema/types/Album';
import { Resolver, Query, Arg } from "type-graphql";
import SimpleAlbumService from '../../app-litzer/album/services/simple.album.service'
import { Service, Inject } from "typedi";
import AlbumService from "../../app-litzer/album/services/album.service";

@Service()
@Resolver(Album)
export class AlbumResolver {

    constructor(@Inject(() => SimpleAlbumService) private albumService: AlbumService) { }

    @Query(returns => [Album], { description: "Find All Albums" })
    async albums(): Promise<Album[]> {
        return await this.albumService.findAll()
    }

    @Query(returns => Album, { description: "Find Album by ID", nullable: true })
    async albumById(@Arg('id') id: string) {
        return await this.albumService.findById(id)
    }

}