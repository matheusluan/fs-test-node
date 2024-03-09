import { FastifyInstance } from "fastify";
import gameData from '../../utils/data/game-data.json';

export async function getGames(app: FastifyInstance) {
    app.get('/games', async () => {
        return gameData
    })
}



