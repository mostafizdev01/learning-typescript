{

    /// ullable types / unknown type

    const searchName = (value: string | null) => {
        if(value){
            console.log("Searching...");
        }else{
            console.log("There is nothing to search");
        }
    }

    searchName(null)


    // unknown typeof 

    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value == "number"){
            const convertedSpeed = (value * 1000)/ 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        }else if (typeof value === "string"){
            const [result, unit] = value.split(" "); /// split diye amra value er man k dui vag korsi
            const convertedSpeed = (parseFloat(result) * 1000)/ 3600
            console.log(`The speed is ${convertedSpeed} ms^-1`); 
        }else{
            console.log("There is wrong input");
            
        }
    }

    getSpeedInMeterPerSecond(null)


    /// never

    const throwError = (msg: string) : never => {  /// never type kokhono kinu ruturn kore na
        throw new Error(msg)
    }
    throwError("Mushkil se error hogaya")

}


//// notic..

// unknown type a kono type set kora thake na ai type cholar somoy type check kore man return kore 
// never type kono kicu return kore na. amara jodi sure thaki kono kicu ruturn korte hobe na tokhon amara never type use korte pari..