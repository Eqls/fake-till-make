import fs from 'fs';

const DATA_DIR = 'data';

export default function parse() {
    const path = `./${DATA_DIR}`;
    const files = fs.readdirSync(path);

    if (!fs.existsSync(path) || files.length === 0){
        console.log(`No resources were found. Use 'npm run resource <resource name> <amount of data>'`)
        return;
    }

    return files.map(fileName => {
        const rawData = fs.readFileSync(`${path}/${fileName}`, {encoding: 'UTF-8'});
        return JSON.parse(rawData);
    });
}