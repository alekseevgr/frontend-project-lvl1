#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have you name?');
console.log(`Hello, ${name}!`)
export default name