import fastify from 'fastify';
import { getGames } from './routes/get-games';
import cookie from '@fastify/cookie';

const app = fastify();

app.register(cookie, {
    secret: "fs-test-app-cookie",
    hook: "onRequest"
});

//HTTP rotes
app.register(getGames);

app.listen({ port: 3333 }).then(() => {
    console.log('HTTP server running!')
});