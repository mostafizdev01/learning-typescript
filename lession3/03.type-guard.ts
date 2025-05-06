{
    /// learn type guard

    // how to work type guard on typeof

    type Alphaneumeric = number | string;

    const add = (num1: Alphaneumeric, num2: Alphaneumeric):Alphaneumeric=>{
        if(typeof num1 === "number" && typeof num2 === "number"){
            return num1 + num2;
        }else{
            return num1.toString() + num2.toString();
        }
    }

    const result1 = add("2",3)
    console.log({result1});


     // how to work type in guard on typescript

     type NormalUser = {
        name: string;
     }

     type AdminUser = {
        name: string;
        role: "admin";
     }


     // create a funciton

     const getUser = (User : NormalUser | AdminUser)=> {
        if("role" in User){ // In Use korle must be dekhe adminUser or NormalUser er mordhe role name kicu ase naki || na hole check kore duitar mordhe common property ki ki ase..
            console.log(`My name is ${User.name} and my role is ${User.role}`);
        }else{
            console.log(`My name is ${User.name}`);
        }
     }
    

     const normalUser : NormalUser = {
        name: "Mr. Normal Bhai"
     }

     const adminUser : AdminUser = {
        name: "Mr. Admin Bhai",
        role: "admin"
     }

     getUser(normalUser)

}