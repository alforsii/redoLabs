// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(theDamage) {
        this.health -= theDamage 
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super( health, strength)
        this.name =name
    }
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage);
        if(this.health > 0) {
            return `${this.name} has received ${theDamage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }

    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(theDamage) {
        super.receiveDamage(theDamage)
        if(this.health > 0) {
            return `A Saxon has received ${theDamage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy = [...this.vikingArmy, viking]
    }
    addSaxon(saxon) {
        this.saxonArmy = [...this.saxonArmy, saxon]
    }

    randomize(arr) {
        const randomNumber = Math.floor(Math.random()*arr.length)
        return {
            solder: arr[randomNumber],
            randomNumber
        }
    }


    vikingAttack() {
        const {solder: theViking} = this.randomize(this.vikingArmy)
        const {solder: theSaxon, randomNumber: currSaxon} = this.randomize(this.saxonArmy)
        const result = theSaxon.receiveDamage(theViking.attack())
        if(theSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter((saxon, i) => i !== currSaxon)
        }
        return  result
    }
  
    saxonAttack() {
        const {solder: theSaxon} = this.randomize(this.saxonArmy)
        const {solder: theViking,  randomNumber: currViking} = this.randomize(this.vikingArmy)
        const result = theViking.receiveDamage(theSaxon.attack())
        if(theViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter((viking, i) => i !== currViking)
        }
        return  result
    }
    showStatus() {
        if (this.vikingArmy <= 0)
        return "Saxons have fought for their lives and survived another day...";
      else if (this.saxonArmy <= 0)
        return "Vikings have won the war of the century!";
      else return "Vikings and Saxons are still in the thick of battle.";
  
    }
}
