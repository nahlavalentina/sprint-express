import express from "express";
const app = express()

import readline from 'node:readline'
const rl = readline.createInterface({input: process.stdin, output: process.stdout})

let organiza = function() {
    rl.question('Escreva lista de propriedades: ', (answer) => {

            if (answer == 'sair' || answer == 'SAIR') {
                console.log("Você saiu.")
                return rl.close();
            } else {
                let result = answer.split(',');
                let array =  result.sort();
                console.log(array);
                return array;
            }

        organiza()
    });

};

organiza()