// Learning function 
// Normal Function
// Arrow Function


function add(num1: number, num2: number):number{  // ekhane return kore o ekta number 
    return num1 + num2;
}

add(2,4)


/// Arrow function 
const addArrow  = (num1: number, num2: number) : number => num1 + num2

// object --> function --> method   ///////// amara jodi kono object er mordhe function likhi taile seita k bole method

const poorUser = {
    name: 'mezba',
    balance: 0,
    addBalance(balance: number): string{
      return `My new balance is : ${this.balance + balance}`;
    }
}


/// arrr in map 

 const arr: number[] = [1,4,10];

 const newArray: number[] = arr.map((elem : number) : number => elem * elem)