{
      /// constans === emon kicu value ja datar mordhe ditei hobe. === emon ki data extands korbo ja sei funciton ta k call korar somoy ditei hobe.

      const addCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T)=>{
        const course = "Next Level Web Development"
        return {
            ...student,
            course
        }
    }

      const student2 = addCourseToStudent({id: 1234, name: "Mr Y", email: "Y@gmail.com",})
    
}