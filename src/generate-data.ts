import * as words from './utils/words.json'

export default function(model: any, amount: number) {
    let data = [];

    console.log(generateObject(model))
    //TODO Model structure parsing.

    // for(let i = 0; i < amount; i++) {
    // }
}

function generateObject(model: any) {
    return model
}

function randomNumber() {
    return Math.random();
}

function randomString() {
    let data = [];
    for(let i = 0; i < Math.floor(Math.random() * 10); i++ ) {
        data.push(words[Math.floor(Math.random() * words.length)])
    }

    return data.join(' ')
}

function randomBoolean() {
    return !!Math.floor(Math.random() * 2)
}

function generateFieldData(type: string) {
    switch(type) {
        case 'number': return randomNumber();
        case 'string': return randomString();
        case 'boolean': return randomBoolean();
        default: return null;
    }
}
