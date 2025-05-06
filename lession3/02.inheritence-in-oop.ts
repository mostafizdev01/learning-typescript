{

    // createing a parent class 

    class Parent {  /// create a parent class and reuse child classes.. 
        name: string;
        age: number;
        address: string;


        constructor(name: string, age: number, address: string) { // create constructor 
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfHourse: number) { /// create a function and pass the paramiter
            console.log(`${this.name} will sleep for ${numberOfHourse}`);

        }
    }


    /// create an child class 

    class Student extends Parent{  /// create class || extends use kora parent class er propety gula child class a use kortesi 

        constructor(name: string, age: number, address: string) { // create constructor 
            super(name, age, address)
        }
    }

    const student1 = new Student("Mr. student", 20, "Uganda")  /// calling the student class and pass the arguments
    console.log(student1.name);



    // create teacher class --->>

    class Teacher extends Parent{
        designation: string; // because designation not assigned Parent class 

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        takeClass(numOfHourse: number) {
            console.log(`${this.name} will sleep for ${numOfHourse}`);

        }
    }

    const teacherResults = new Teacher("Mostafiz", 22, "Bangladesg", "developer")
    console.log(teacherResults);
    

}


/// Notic.....

// inheritence holo emon ekta class ja reuse kora jai child class a use kora jai.