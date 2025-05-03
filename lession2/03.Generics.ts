{

    /// generic type 
    type GenericArray<T> = Array<T>

    const rollNumbers: GenericArray<number>= [1,3,8];


    const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

    const boolArray: GenericArray<boolean> = [true, false, true];


    const add = (x: number, y:number)=> x+y

    add(30,20)


    /// useing generic on object 

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: "Mezba",
            age: 100,
        },
        {
            name: "Zhanker Mahbub",
            age: 110,
        }
    ]

    // generic tuple

    type GenericTuple<X,Y> = [X , Y]

    const manus : GenericTuple<string, string> = ["Mr. X", "Mr. Y"]

    const UserWithId: GenericTuple<number, {name:string, email: string}> = [1234, {name: "Mostafiz", email: "example@gmail.com"}]

    
}

/// Notic ===>>

/// Amader proyojon onujaye amara dynamic vabe kono type create korte pari and reuse korte pari takei generics type bole.