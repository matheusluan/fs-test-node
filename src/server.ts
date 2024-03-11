import fastify from 'fastify';
import cors from '@fastify/cors';

import { Play } from './http/routes/play';
import { GetGames } from './http/routes/get-games';
import { SearchGames } from './http/routes/search-games';

//Init app
const app = fastify();

//Cors allow
app.register(cors, {
    origin: true
})

//HTTP rotes
app.register(GetGames);
app.register(SearchGames);
app.register(Play);

//Listen
app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
})
    .then(() => {
        console.log(`HTTP server running!`)
    });