import * as words from './utils/words.json';

export default function generateData(model: any, amount: number) {

    return Array.from(Array(amount)).map(() => applyValues(model, amount));

}

function applyValues(model: any, amount: number) {
    const randomizedAmount = Math.floor(Math.random() * amount) + 1;
    let temp = { ...model };
    const keys = Object.keys(temp);

    for (const key of keys) {
        if (typeof temp[key] === 'object' && Array.isArray(temp[key])) {
            if (typeof temp[key][0] === 'string') {
                temp[key] =
                    Array.from(Array(randomizedAmount)).map(() =>
                        generateFieldData(temp[key][0]),
                    )
            } else {
                temp[key] =
                    Array.from(Array(randomizedAmount)).map(() =>
                        applyValues(temp[key][0], amount),
                    )
            }
        } else if (typeof temp[key] === 'object') {
            temp[key] = applyValues(temp[key], amount)
        } else {
            temp[key] = generateFieldData(temp[key])
        }
    }

    return temp
}

function randomNumber() {
    return Math.floor(Math.random() * 100)
}

function randomString() {
    let data = [];

    for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
        data.push(words.array[Math.floor(Math.random() * words.array.length)])
    }

    return data.join(' ')
}

function randomBoolean() {
    return !!Math.floor(Math.random() * 2)
}

function generateFieldData(type: string) {
    switch (type) {
        case 'number':
            return randomNumber();
        case 'string':
            return randomString();
        case 'boolean':
            return randomBoolean();
        default:
            return null
    }
}
