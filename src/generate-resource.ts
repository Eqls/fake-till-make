import fs from 'fs';

const DATA_DIR = 'data';

export function generateResource(name: string, dataAmount: number = 20) {
    const path = `./${DATA_DIR}`;

    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }

    let resource = {
        model: {
            exampleField: "number"
        },
        dataAmount
    };

    fs.writeFileSync(`${path}/${name}.json`, JSON.stringify(resource, null, 2));
}