{

    // function with generic 

    // normal function 

    const createArray = (param : string) : string[] =>{
        return [param];
    }

    // useing generic on function 

    const createArrayWithGeneric = <T>(param: T): T[] =>{  // T == dynamic type. 
        return [param]
    }


    // call normal function 

    const res1 = createArray ("Bangladesh");

    // call generic function 

    const resGeneric = createArrayWithGeneric<string>("bangladesh");

    type User = {id: number; name: string};

    const resGenericObj = createArrayWithGeneric<User>({
        id: 1234,
        name: "Mr. pashan"
    })

  // useing tuple on generic =================================================================================

    // normal function 

    const createArrayWithTuple = <T, Q> (param1 : T, param2: Q) : [T, Q] =>{
        return [param1, param2];
    }

    // useing generic on function 

    const createArrayWithGenericTupple = <T, Q>(param1: T, param2: Q): [T, Q] =>{  // T == dynamic type. 
        return [param1, param2]
    }


    // call normal function 

    const resTupple1 = createArrayWithTuple <string, number> ("Bangladesh", 1234);

    // call generic function 

    const resGenericTupple = createArrayWithGenericTupple<string, number>("bangladesh", 12345);

    type UserTupple = {id: number; name: string};

    const resGenericObjTupple = createArrayWithGeneric<UserTupple>({
        id: 1234,
        name: "Mr. pashan"
    })

    // fixed valeue assign in function ===============================================================

    const addCourseToStudent = <T>(student: T)=>{
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }

    type darauMojaDekhaitesi = {
        name: string;
        email: string;
        devType: string;
        hasWatch?: string;
    }

    const student1 = addCourseToStudent<darauMojaDekhaitesi>({name: "Mr. X", email: "X@gmail.com", devType: "NLWD"})
    const student2 = addCourseToStudent({name: "Mr Y", email: "Y@gmail.com", devType: "NLWD", hasWatch: "Apple Watch"})
    


}