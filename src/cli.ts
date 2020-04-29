import readline from 'readline';

import * as generateResource from "./generate-resource";

const [node, cli, resourceName, dataAmount] = process.argv;

interface Arguments {
    resourceName: string;
    dataAmount: number;
}

async function run() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const ask = (questionText): Promise<string> => {
        return new Promise((resolve, reject) => {
            rl.question(questionText, (input) => resolve(input) );
        });
    };

    let args: Arguments = {
        resourceName: resourceName,
        dataAmount: +dataAmount,
    };

    if (!resourceName) {
        args.resourceName = await ask('Resource name: ');
        args.dataAmount = +(await ask('Number of data entries required: '));
    }

    await generateResource.generateResource(args.resourceName, args.dataAmount);
    console.log('Resource file was successfully generates')
}

(async () => await run())();