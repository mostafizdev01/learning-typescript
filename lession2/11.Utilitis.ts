{
    /// utility types 
    // pick == kono object theke ki ki property nite chai sei gula

    type Person = {
        name: string;
        age: number;
        email?: string;
        address: string;
        contactNo: string;
    }

    type Name = Pick<Person, "name" | "age"> // ami jake jake chiabo tare tare or[or mean = Union] use kore dite perbo.
    
    /// Omit === bad deuya ===>> ami kon kon property object theke bad dite chai sei gula ekhane dibo

    type ContactInfo = Omit <Person, "name" | "age" | "address">

    /// Required // j object k amara access korbo tar sob property requird kore dibo. optional thakle o

    type PersonRequired = Required<Person>

    /// partial === sob property k optional kore dibe

    type PersonPartial = Partial<Person>

    // Readonly === only reading || no editing data no change data

    type PersonReadonly = Readonly<Person>

    const person1: PersonReadonly = {
        name: "Mr. XY",
        age: 200,
        contactNo: "1234564567"
    }

    /// Record 

    // type MyObj = {
    //     a: string;
    //     b: string
    // }

    type MyObj = Record<string, number> // Record use korle amra myobj er mordhe onek gula property rakhte pari and first ta hobe string and secound ta hobe number

    const EmptyObj: Record<string, unknown> = {}

    const obj1 : MyObj = {
        a: "aa",
        b: "bb",
        c: "cc"
    }
}