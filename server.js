const Senators = require('./data/senators');
const Hapi = require('hapi');
// const { get } = require('hapi');
// const { router } = require('hapi-router');

'use strict';

const server = Hapi.server ({
    port: 4000,
    host: 'localhost'
});


server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return 'Hello World';
    }
});

server.route({
    method: 'GET',
    path: '/all',
    handler: (request, h) => {
        return Senators;
    }
});

server.route({
    method: 'GET',
    path: '/indies',
    handler: (request, h) => {
        return Senators.filter(senator => senator.party === 'Independent')
    }
<<<<<<< HEAD

})

server.route({
    method: 'GET',
    path: '/dems',
    handler: (request, h) => {
        return Senators.filter(senator => senator.party === 'Democrat')
    }
})
=======
});



server.route({
  method: 'GET',
  path: '/repubs',
  handler: (request, h) => {
    return Senators.filter(senator => senator.party === 'Republican')
  }
});


//Mark code goes below

server.route({
    method: 'GET',
path: '/males',
handler: (request, h) => {
    return Senators.filter(senator => senator.person.gender === 'male')
}
});
>>>>>>> 22be35673bd8fb9f90bbe40b47c5cb53af09db65

const init = async () => {
    await server.start();
    console.log(`Server Running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();