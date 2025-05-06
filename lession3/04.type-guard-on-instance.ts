{
    /// learn instance of operator of type guard...

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string){
            this.name = name;
            this.species = species
        }

        makeSound(){
            console.log("🔊 I'm a making sounding...");
            
        }
    }


    // create a child class for dog

    class Dog extends Animal {  // extends Animal property in Dog
        constructor(name:string, species: string){
            super(name, species)
        }

        makeBark(){
            console.log("🐕‍🦺 I am barking...");
            
        }
    }

    // create a child class for cat

    class Cat extends Animal {  // extends Animal property in Dog
        constructor(name:string, species: string){
            super(name, species)
        }

        makeMeau(){
            console.log("🐕‍🦺 I am Meauuuu...");
            
        }
    }

    // creating instancesof

    /// smart way te handle korar jnne chaile amra function use korte pari

    const isDog = (animal: Animal) : animal is Dog => {
        return animal instanceof Dog // instanceof mane Dog k animal er mordhe call kora
    }


    const isCat = (animal: Animal) : animal is Cat => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal)=>{
        if(isDog(animal)){
            animal.makeBark();
        }else if(isCat(animal)){
            animal.makeMeau()
        }else{
            animal.makeSound()
        }
    }


    // call the classess

    const cating = new Cat("Mucha", "meau meau")
    const doging = new Dog("Mucha", "bagha bagha")
    console.log(cating, cating.makeMeau(), doging, doging.makeBark());
    


}