const {ServerApi} = require('@oreodusk/oreonyx');

//----------------------------look :)------------------------------------//
//      Here you've to give the entry path of server-side-rendering                      //
//---------------------------------------------------------------------//

module.exports = ServerApi.entry('./view/js/server.js')
    .setHost("http://localhost:5050").setMode("development").run();
