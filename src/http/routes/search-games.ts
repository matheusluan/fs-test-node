import z from "zod";
import { FastifyInstance } from "fastify";

import { Game } from "../../types/game";
import gameData from '../../utils/data/game-data.json';

export async function searchGames(app: FastifyInstance) {
    app.get('/games/:search', async (request, reply) => {

        //Validate if is string (i could put a length validation, uuid, etc...)
        const getGamesSearch = z.object({
            search: z.string()
        });

        //Validate
        const { search } = getGamesSearch.parse(request.params);

        // Filter all the games with the search 
        const filteredGames = gameData.filter((game: Game) => {
            return game.title.toLowerCase().includes(search.toLowerCase());
        });

        return reply.send(filteredGames);
    })
}