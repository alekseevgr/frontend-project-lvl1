#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { even } from './brain-even';
console.log('Welcome to the Brain Games!')
export const name = readlineSync.question('May I have you name?');
console.log(`Hello, ${name}!`)

even
 