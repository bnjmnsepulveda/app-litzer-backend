import { Container } from "typedi";
import albums from './data/albums.json';
import songs from './data/songs.json';
import players from './data/players.json';

const initGlobalContainer = () => {

    Container.set('players.data', players)
    Container.set('albums.data', albums)
    Container.set('songs.data', songs)

}

export default initGlobalContainer