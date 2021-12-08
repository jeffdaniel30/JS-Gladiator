// Create a `Gladiator` class that has the following properties...

// - a `name`
// - a `weapon` (one of Spear, Club, Trident)
class Arena {
    constructor (name, weapon){
        let lower = name.toLowerCase()
        this.name = name.charAt(0).toUpperCase() + lower.slice(1)
        this.weapon= weapon
        this.gladiators= []
    }
    addGladiator(gladiator) {
        // pushes gladiator to the.gladiator[] in the Arena Object and limts the number of elemenets being added to 2
        this.gladiators.push(gladiator);
        while(this.gladiators.length > 2) {
            this.gladiators.pop()
        } 
    }
    fight(){
        if (this.gladiators.length === 2){
            console.log('fight');
        }
        if (this.gladiators[0].weapon === this.gladiators[1].weapon) {
            console.log(`${this.gladiators[0]} ${this.gladiators[1]} both have lost'`);
        }
        if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon=='Club') {
            console.log(`${this.gladiators[0].name} Wins`);
        } else if (this.gladiators[0].weapon == 'Spear' && this.gladiators[1].weapon=='Tirdent') {
            // this.gladiators.splice(0,1)
            console.log(`${this.gladiators[1].name} Wins!`);}


        if (this.gladiators[0].weapon === 'Club' && this.gladiators[1].weapon==='Trident') {
            console.log(`${this.gladiators[0].name} Wins!`);
        } else if (this.gladiators[0].weapon == 'Club' && this.gladiators[1].weapon=='Spear') {
            // this.gladiators.splice(0,1)
            console.log(`${this.gladiators[1].name} Wins!`);}


        if (this.gladiators[0].weapon === 'Trident' && this.gladiators[1].weapon==='Spear') {
            console.log(`${this.gladiators[0].name} Wins!`)
        } else if (this.gladiators[0].weapon == 'Trident' && this.gladiators[1].weapon=='Club') {
            // this.gladiators.splice(1,1)
            console.log(`${this.gladiators[1].name} Wins!`);}
    }
}

class Gladiator {
    constructor (name, weapon){
    this.name = name
    this.weapon = weapon
    }
}
const colosseum = new Arena("colosseum");
console.log(colosseum.name);


const titus = new Gladiator("Titus", "Trident");
const max = new Gladiator('Maximus', "Spear");
const andronicus = new Gladiator("Andronicus", "Club");

colosseum.addGladiator(titus)
colosseum.addGladiator(andronicus)
colosseum.addGladiator(max)
console.log(colosseum.gladiators)
colosseum.fight()
// console.log(max.name);
// const megalopolis = new Arena("megalopolis");
// console.log(megalopolis.name);
// console.log(max.weapon);
// colosseum.fight();
// const goon = new Gladiator('Gob', "Taco");
// console.log(goon.name);
// console.log(goon.weapon);

// colosseum.addGladiator(max);
// console.log(colosseum.gladiators);

// fight(gladiator, weapon){
//         if (.length==2){
//             console.log(`${gladiator.name} fight`)
//         } if (gladiator.weapon == 'Trident' && gladiator.weapon == 'Spear'){
//             console.log()