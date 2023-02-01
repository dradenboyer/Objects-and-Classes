let person = {
    firstName: 'Lukas', 
    lastName: 'Nessi',
    age: 25
}

console.log(person['lastName'])

let meal = {
    appetizer: 'chips and salsa',
    entree: 'Chicken enchiladas',
    dessert: 'tres leches cake',
    drink: 'horchata'
}

let {entree} = meal

// console.log(entree)

let{appetizer, dessert, drink: bestDrinkEver} = meal

console.log(appetizer,dessert,bestDrinkEver)

for(key in meal){
    console.log(meal[key])
}

person.job = 'Instructor'
person.isCool = false

console.log(person)

class Dog {
    constructor(name, breed, age){
        this.name = name
        this.breed = breed
        this.age = age
    }

    speak(times){
        for(let i = 0; i <times; i++)
        console.log(`hello my name is ${this.name}`)
    }
}

let dozer = new Dog('dozer', 'retriever', 5)

console.log(dozer)

dozer.speak(5)

class Puppy extends Dog {
    constructor(name,breed,age,trainingLevel){
        super(name, breed, age)
        this.trainingLevel = trainingLevel
    }
    levelUp(){
        this.trainingLevel++
    }
    
}

let dixie = new Puppy('dixie', 'boxers' , 1,0)

dixie.levelUp()
dixie.speak(2)

dixie.breed = 

console.log(dixie)

let names = ['Jack', 'Rocky' , 'Jess' , 'Lucas', 'Ness']
let breeds = ['boxer', 'lab', 'poodle', 'doberman', 'retriever']
let dogs = []

const makeDogs = () => {
    for(let i = 0; i < names.length; i++){
        let newDog = new Dog(names[i], breeds[i], 3)
         dogs.push(newDog)
    }
}

makeDogs()
console.log(dogs)



for(let i = 0; i < dogs.length; i++){
    dogs[i].speak(1)
}
