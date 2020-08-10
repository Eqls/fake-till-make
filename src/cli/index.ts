#!/usr/bin/env node
import resource from './resource'
import server from './server'

const [node, cli, keyword] = process.argv

switch (keyword) {
    case 'start':
        server();
        break;
    case 'resource':
        resource();
        break;
    default:
        console.log("Command doesn't exist!")
}
