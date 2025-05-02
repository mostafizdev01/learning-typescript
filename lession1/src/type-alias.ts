{

// Learn Type Alias 


type student = {
    name: string;
    age: number;
    contactNo: string;
    address: string

}


const student1: student = {
    name: "mostafiz",
    age: 22,
    contactNo: '123412341234',
    address: 'Rajshahi Bangladesh'
}

const student2: student = {
    name: "Sakil",
    age: 22,
    contactNo: '123412341234',
    address: 'Rajshahi Bangladesh'
}

type UserName = string
type IsAdmin = boolean 

const userName: UserName = "Persian"
const isAdmin: IsAdmin = true

/// alias useing the function ---->>>

type Add = (num1: number, num2: number) => number;
const add: Add = (num1, num2) => num1 + num2;



}


// Notis in Type Alias 

// amara jokhon kono variable or object create kori
// tokhon amara potita object er user type set na 
// kore alada vabe type set kore sob gula object er upor kaj koranoke type alias bola hoi.
 