{  // set the scope: ==  scope set korlam jno onno file kono name er sate amader file er name mile gele jno error na dei

    // we are learning...
    // spread operator 
    // rest oprator
    // destructuring 

    // learn spread operator... ---->> arr using the spread operator 

    const bros1: string[] = ["Mir", "Firoz", "Mizan"]
    const bros2: string[] = ["Hasan", "Tohidul", "Korim"]

    bros1.push(...bros2)  // amra kono string arr other arr te push korte chaile amra speread operator use korbo.

    // learn spread operator... ---->> Object using the spread operator 
    
    const mentors1 = {
        typeScript: "mizan",
        docker: "alamin",
        dbms: "bablu"
    }

    const mentors2 = {
        next: "shovo",
        prisma: "salman",
        aws: "zakir"
    }

    const mentorsList = {
        ...mentors1,
        ...mentors2
    }


    // learn rest operator
    
    const greetFriends = (...friends: string[])=> {
        friends.forEach((friend: string)=> console.log(`Hi ${friend}`))
    }


    greetFriends("Abul", "Kabul", "Babul", "ubul", "labul");
    
}


/// Notic in this section ------->>>>>>

// when i use spread operator and when i use rest prerators

// amara jokhon ekta arr or obj theke ekta ekta kore data ane onno ekta arrar or object a single vabe rakhbo tokhon amra speread operator use korbo.
// amara jokhon kono arr or obj a ekta ekta kore single data ane onno ekta arrar or object a rakhbo and arr or object create korbo tokhon amra rest operator use korbo.