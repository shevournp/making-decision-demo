/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35 

if(jonSnowAttack > jamieLannisterAttack) {
    console.log('Jon snow has a better attack than Jamie Lannister')
  }else if (jamieLannisterAttack > jonSnowAttack) {  
console.log('jamie lannister has a better attack than john Snow') }
else {
    console.log('out fighters are evenlt match')
}

let jonSnowHealth = 100
let jonSnowDefense = 0 

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log('jon snow has been slain.')
} else {
jonSnowHealth = jonSnowHealth - jamieLannisterAttack
console.log (`jon snows health is fown to ${jonSnowHealth}`)
}
