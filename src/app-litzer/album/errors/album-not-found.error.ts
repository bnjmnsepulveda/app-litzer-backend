
export default class AlbumNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AlbumNotFoundError";
    }
}