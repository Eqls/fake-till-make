import express from 'express';

import parse from './parse';
import generateData from './generate-data';

const app = express();

const parsed = parse();
const data = generateData(parsed[0].model, parsed[0].dataAmount);

console.log(JSON.stringify(data, null, 2))


// app.get( "/", ( req, res ) => {
//     res.send( "Hello world!" );
// } );
//
// app.listen( port, () => {
//     console.log( `server started at http://localhost:${ port }` );
// } );