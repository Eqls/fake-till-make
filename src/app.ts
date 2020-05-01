import express from 'express';

import parse from './parse';
import generateData from './generate-data';

const app = express();

const parsed = parse();
generateData(parsed[0].model, parsed[0].dataAmount);


// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );
//
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );