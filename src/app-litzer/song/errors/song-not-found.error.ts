
export default class SongNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SongNotFoundError";
    }
}