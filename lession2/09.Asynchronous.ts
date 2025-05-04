{
    // create basic promiss

    const createPromise = (): Promise<string>=>{
        return new Promise<string>((resolve, reject)=>{
            const data : string = "something"
            if(data){
                resolve(data)
            }else{
                reject("failed to load data")
            }
        })
    }

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getTodo = async (): Promise<Todo>=>{
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        const data = await response.json();
        return data;
    }


    // call create promise function
    const showData = async (): Promise<string> =>{
        const data:string = await createPromise()
       return data;
        
    }
    showData()
}