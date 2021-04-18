import "reflect-metadata";
import { Album } from '../schema/types/Album';
import { Resolver, Query, Arg } from "type-graphql";
import AlbumService from '../../app-litzer/album/services/album.service'


@Resolver(Album)
export class AlbumResolver {

    @Query(returns => [Album], { description: "Find All Albums" })
    async albums(): Promise<Album[]> {
        return await AlbumService.findAll()
    }

    @Query(returns => Album, { description: "Find Album by ID", nullable: true })
    async albumById(@Arg('id') id: string) {
        return await AlbumService.findById(id)
    }

}