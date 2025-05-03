{

    //

    // intersection-->>

    type User1 = {
        name: string;
        age: number;
    }

    /// intersection vs interface

    // intersection writing...

    type UserWithRole = User1 & {role : string};

    /// this code writing on interface...

    interface UserWithRole2 extends User2 {
        role: string
    }

    interface User2  {  // interface diye amara premitive type data assign korte perbo na. because interface amader secaund bracket use kore likhte hoi. 
        name: string;
        age: number;
    }

    const user1: UserWithRole2 = {
        name: "Mostafiz",
        age: 22,
        role : "manager"
    }

    // js --> object , array -> object, functon o ekta object

    // useing interface on array

    /// intersection Useing on array

    type Roll1 = number[];

    // interface useing on array
    interface Roll2 {
        [index : number] : number
    }

    const rollNumber1: Roll2 = [1,2,3]  /// ekhane roll2 diye bujhano hoise rollnumber1 ekta number type er arry



    /// useing intersection and interface on function-->>

    // useing intersection on function
    
    type Add1 = (num1: number, num2: number) => number
    
    // useing intersection on function
    interface Add2 {
        (num1:number, num2: number) : number
    }

    const add: Add2 = (num1, num2)=> num1 + num2


    //

}

/// Notic-->>
// kokhon amar intersection and kokhon amara interface use korbo ?
/// intersection is clean code so amra intersection type use korar try korbo Most of time...