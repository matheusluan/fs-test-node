import fastify from 'fastify';
import cookie from '@fastify/cookie';

import { getGames } from './routes/get-games';
import { searchGames } from './routes/search-games';

const app = fastify();

app.register(cookie, {
    secret: "fs-test-app-cookie",
    hook: "onRequest"
});

//HTTP rotes
app.register(getGames);
app.register(searchGames);

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
});