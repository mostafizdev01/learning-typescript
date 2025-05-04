{
    // mapped types 

    const arrOfNumbers: number[] = [1,4,5];

    const arrOfString: string[] = arrOfNumbers.map((number)=>
    number.toString()
    )
    console.log(arrOfString);
    
    // useing maping on looping variable 

    type AreaNumber = {
        height: number;
        width: number;
    }

    type AreaString<T> = {
        [key in keyof T ] : T[key] /// looping er ekta ekta man key er mordhe chole jaitese
    }

    const area1 : AreaString <{height: string; width: number}>={
       height: "100",
       width: 50
    }
    console.log(area1);
    
    
}