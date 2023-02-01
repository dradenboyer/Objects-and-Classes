class Wizard {
    constructor(name,age,armor,power){
        this.
        
        this.name = name
        this.age = age
        this.armor = armor
        this.power = power

        this.health = 100
    }

    lightningBolt(opponent){
        opponent.takeDamage(this.power)
        return `Wizard ${this.name} attacks ${opponent.class} ${opponent.name} for ${this.power -opponent.armor}`
    }

    takeDamage(damgage){
        let actualDamage = damage -this.armor
        this.health -= actualDamage
        return `Wizard ${this.name} takes ${actualDamage}`
    }
}

class Barbarian {
    constructor(name,age,armor,power){
        this.name = name
        this.age = age
        this.armor = armor
        this.power = power
    }
}