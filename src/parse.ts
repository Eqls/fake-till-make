import fs from 'fs';

const DATA_DIR = 'data';

export default function parse() {
    const path = `./${DATA_DIR}`;

    if (!fs.existsSync(path)){
        console.log(`No resources were found. Use 'npm run resource <resource name> <amount of data>'`)
    }
}