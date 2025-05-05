{
    // oop == > object oriented programming >>> and learning class 

    class Animal {
        // name: string; /// class er mordhe amara j name, species and sound likhsi tader bole == property.
        // species: string;  // paramiter propertis likher jonno amaader this. name ai vabe diclear kora lagbe na.
        // sound: string;

        constructor (public name: string, public species: string, public sound: string){ // public diye bujhai == > paramiter propertis || and global access benifits
        //    this.name = name; // paramiter propertis likher jonno amaader this. name ai vabe diclear kora lagbe na.
        //    this.species = species;
        //    this.sound = sound;
        }

        makeSound(){  // this is method
            console.log(`🐕 The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German Shepared dog bhai", "dog", "Ghew Ghew")  /// here is creating instains
    const cat = new Animal("🐱 German Shepared cat apu", "cat", "Meau Meau")
    dog.makeSound()
    const soundSD = cat.name

    console.log(soundSD);
    




}