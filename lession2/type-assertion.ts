{
    //

    /// type assertion 

    let anything : any;
    anything = "Next Lavel Web Development";

    anything = 222;

    (anything as number)  // amra bujte pari jokhon aita ki dhoroner data type


    const kgToGm = (value : string | number): string | number | undefined=>{
        if(typeof value === "string"){
            const convertedValue = parseFloat(value)*1000
            return `The converted value is ${convertedValue}`;
        }
        if(typeof value === "number"){
            return value *1000
        }
    }

      const result4 = kgToGm(1000) as number // amra jokhon sure janbo data type ki hobe tokhon amra as use kkore datatype bole dibo 
      const result5 = kgToGm("1000") as string
    //
}

/// notic...

// amara jokhon jani kono datar type ki hobe tokhon amra take type assertion boli.
// type assertion a amara type set kore dei