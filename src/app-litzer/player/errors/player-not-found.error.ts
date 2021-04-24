
export default class PlayerNotFoundError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "PlayerNotFoundError";
    }
}