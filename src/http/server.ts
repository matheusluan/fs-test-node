import fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';

import { getGames } from './routes/get-games';
import { searchGames } from './routes/search-games';

const port = parseInt(process.env.PORT!) || 3333;

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

app.listen({ port: port }).then(() => {
    console.log(`HTTP server running at port ${port}!`)
});