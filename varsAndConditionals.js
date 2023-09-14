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
console.log (`jon snows health is down to ${jonSnowHealth}`)
}

jonSnowDefense += 25

//sec attack from jamie
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense){
    console.log ('jon snow is dead')
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log (`jon snows health is down to ${jonSnowHealth}`)
}

let isDead = Math.random() > .5
//jamie uses a gatling gun at jon 1 times as he runs into the forest
// there is a 50% chance, per gun usage, that jon is dead
for(let i = 1; i < 1; i++) {
    isDead = Math.random() > .5
    if (isDead === true ) {
        console.log(`john has died after ${i}rounds`)
        break
    }
}
if (isDead === false) {
    console.log('it is a miracle!john is alive after the bombardment')
    while(jonSnowHealth > 0) {
        console.log('jamie punches jon')
        jonSnowHealth -= 5
      
      
    }
    console.log( 'okay,jon did not make it.sorry')

}

//jamie wants jon dead, and ensures it will happen
//he pursues jon into the woods to use his fists
