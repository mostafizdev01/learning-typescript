{

    /// ternary operator || optional chaining || nullish coalescing operator

    const age: number = 19;

    if(age >= 18){
        console.log("adult");
    }else{
        console.log("not adult");
        
    }
    
    /// ternary operator

    const IsAdult = age>=18 ? "Adult" : "No Adult";
    console.log({IsAdult});


    /// nullish coalescing operator

    const isAuthenticated = null;

    const result1 = isAuthenticated ?? "Guest"
    
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    
    console.log({result1, result2});

    // optional chaining 

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    } 
    
    const user: User = {
        name: "Mostafiz",
        address: {
            city: "Raj",
            road: "Awesome road",
            presentAddress: "raj town",
        },
    }


    const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
    console.log({permanentAddress});

}


/// Notic -->>

/// nullish coalescing operator kaj kore null and undifind er upor.