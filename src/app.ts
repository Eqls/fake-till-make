import express from 'express';
import * as bodyParser from 'body-parser';

import parse from './parse';
import generateData from './generate-data';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const resources = parse();

// TODO Model type enforcing.

for(let resource of resources) {

    let data = generateData(resource.model, resource.dataAmount);

    app.get( `/${resource.name}`, ( req, res ) => {
        return res.json(data);
    } );

    app.get( `/${resource.name}/:id`, ( req, res ) => {
        return res.json(data.find(item => item.id === Number(req.params.id)));
    });

    app.put( `/${resource.name}/:id`, ( req, res ) => {
        const matchIndex = data.findIndex(item => item.id === Number(req.params.id));

        if(!req.params.id) return res.json({error: 'No id was specified'});
        if(matchIndex === -1) return res.json({error: `No match found with id ${req.params.id}`});

        data[matchIndex] = {
            ...data[matchIndex],
            ...req.body
        };

        return res.json(data[matchIndex]);
    });

    app.post( `/${resource.name}`, ( req, res ) => {
        data.push(req.body);
        return res.json(data);
    });

    app.delete( `/${resource.name}/:id`, ( req, res ) => {
        const matchIndex = data.findIndex(item => item.id === Number(req.params.id));

        if (!req.params.id) return res.json({error: 'No id was specified'});
        if (matchIndex === -1) return res.json({error: `No match found with id ${req.params.id}`});

        const removed = data.splice(matchIndex, 1);

        return res.json(removed)
    });
}

app.listen( PORT, () => {
    console.log( `server started at http://localhost:${ PORT }` );
} );