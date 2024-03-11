import fastify from 'fastify';
import cors from '@fastify/cors';
import cookie from '@fastify/cookie';

import { getGames } from './http/routes/get-games';
import { searchGames } from './http/routes/search-games';

const app = fastify();

//Cors allow
app.register(cors, {
    origin: true
})

//Cookie
app.register(cookie, {
    secret: "fs-test-app-cookie",
    hook: "onRequest"
});

//HTTP rotes
app.register(getGames);
app.register(searchGames);

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333
})
    .then(() => {
        console.log(`HTTP server running!`)
    });