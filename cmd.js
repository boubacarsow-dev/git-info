#!/usr/bin/env node
import got from 'got';
const API = 'https://api.github.com/users/';

const usage = (msg = "welcome to github info checker")=>{
    console.log(`\n ${msg}`);
    console.log(`utilisation : git-info pseudo`);
}
const arg = process.argv.slice(2);
if(arg.length<1){
    usage(`utilisation: le pseduo est obligatoire`);
    process.exit(1)
}
//recup arg
let pseudo = arg[0];


try {
    let res = await got.get(`${API}${pseudo}`)
    const re = res.body;
    const deballage = JSON.parse(re);
    console.log(`le nom est ${deballage.name}`);
    console.log(`la bio est : ${deballage.bio}`);
    console.log(`le nombre de projets est : $${deballage.public_repos}`);
    
} catch (error) {
    console.error(`aucune info trouvee`);
    console.log(`erreur ${error.message}`);
  process.exit(1);
}