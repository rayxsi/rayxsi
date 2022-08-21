const {BrowserApi} = require('@oreodusk/oreonyx');

//----------------------------look :)------------------------------------//
// Here you've to give the source file path of client-side-rendering and       //
// obviously the output path as well.                                                                                //
//---------------------------------------------------------------------//

// const props = {
//     markUpControl: {
//         ext: 'html',
//         dir: 'dist'
//     },
//     devServer: true
// }

module.exports = BrowserApi.entry('./view/js/browser.js')
    .setHost('http://localhost:5050').setMode('development').run();
