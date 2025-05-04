{

    //generic constraint with keyof operator-----

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owner = "Ration" | "Fation" | "Nation"  /// i'm created manually

    // now this line useing constraints keyof type 

    type Owner2 = keyof Vehicle;  // key diye bujhai vehicle er sobkey gula k.

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y)=>{ /// X == object.keyof x mane x object er key gula dite hobe.and function a duita parameter nitese ekta object and ekta object er key.
        return obj[key];
    }

    const user = {
        name: "Mr. persian",
        age: 26,
        address: "ctg"
    };

    const car = {
        model: "toyota",
        Year: 2001
    }

    getPropertyValue(car, "Year")

}