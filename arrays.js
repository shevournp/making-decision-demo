/*
    In this file, we'll be making a new  story
    about Doug, the Pokemon trainer. 
*/
//Doug wants to be a pokemon trainer.
//his mom gives him a backpack full of handy item
//and kicks him out of her house

let backpack = ['poke ball, poke ball, potion, beef jerky,running shoes']




let pokemon = []
//Douh wants more snacks than beef jerky
// he goes to the store and buy two packs of 0reos
backpack.push('oreo')
backpack.push('oreo')

console.log('after buying oreos, this is our backpack:')
console.log(backpack)


//doug meets professor Oak at the store
//oak sees his potential and gives him a pokedex and a pikachu
backpack.push('pokedex')
pokemon.push('pikachu')

console.log('after meeting professor oak,our backpack and pokemon are:')
console.log('backpack')
console.log('pokemon')


//doug goes out into the wild, into the tall grass in the forest
//and throughout the day,he encounter four pidgeys
//
for(let i = 0; i < 4; i++) {
        pokemon.push('pidgey')
}

console.log('after the pidgeys,our pokemon are now:')
console.log('pokemon')

//
//
//
backpack.splice = (3,4)
console.log('after the binge and the giveaway, backpack is now;')
console.log(backpack)



let newPokemon = 'Charizard';

//comment
pokemon.push(newPokemon)

console.log('after catching charizars, our pokemon are now')
console.log(pokemon)

//
//
//
console.log('here is my pikachu!')
let cutestPokemon = pokemon[0]
console.log(cutestPokemon)

//
//
//
let clonedPidgeys= pokemon.slice(1,5)
console.log('here are your cloned pidgey')
console.log( clonedPidgeys ) 





backpack.unshift('jynx status')
console.log('backpack after adding statue')
console.log(backpack)