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
    vikingAttack() {
        const randomV = Math.floor(Math.random()*this.vikingArmy.length)
        const theViking = this.vikingArmy[randomV]
        const randomS = Math.floor(Math.random()*this.saxonArmy.length)
        const theSaxon = this.saxonArmy[randomS]
        const result = theSaxon.receiveDamage(theViking.attack())
        if(theSaxon.health <= 0) {
            this.saxonArmy = this.saxonArmy.filter((saxon, i) => i !== randomS)
        }
        return  result
    }
    saxonAttack() {
        const randomV = Math.floor(Math.random()*this.vikingArmy.length)
        const theViking = this.vikingArmy[randomV]
        const randomS = Math.floor(Math.random()*this.saxonArmy.length)
        const theSaxon = this.saxonArmy[randomS]
        const result = theViking.receiveDamage(theSaxon.attack())
        if(theViking.health <= 0) {
            this.vikingArmy = this.vikingArmy.filter((viking, i) => i !== randomV)
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
