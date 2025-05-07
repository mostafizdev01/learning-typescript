{
    // learn abstraction.

    /// abstraction amara dui vabe korte pari. 1. Interface 2. abstract

    interface Vehicle1 {
        name: string;
        model: number;
    }


    const vehicle1: Vehicle1 = {
        name: "Toyota",
        model: 2000
    }

    /// create class and useing in interface

    interface Vehicle2 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle2 { /// implements supported on Vehicle1 type
        startEngine(): void {
            console.log(' 🏃‍♂️ I am starting the car engine');

        }
        stopEngine(): void {
            console.log(' 🫸 I am stoping the car engine');

        }
        move(): void {
            console.log(' 🏃‍♀️‍➡️ I am moving the car');
        }

        test() {
            console.log('I am just testing..');

        }
    }


    // const toyotaCar = new Car();
    // toyotaCar.startEngine()


    /// abstract in class

    abstract class Vehicle3 {
        abstract startEngine(): void
        abstract stopEngine(): void
        abstract move(): void

        test() {
            console.log('I am just testing..');

        }
    }

    class ToyotaCar extends Vehicle3 {
        startEngine(): void {
          console.log("I am starting the car engine");
          
        }
        stoptEngine(): void {
          console.log("I am stoping the car engine");
          
        }
        move(): void {
          console.log("I am moving the car ");
          
        }
    }

    const hondacar = new ToyotaCar();
    hondacar.startEngine()
}