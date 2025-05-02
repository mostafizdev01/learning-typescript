{

// Union types == Logic building...

type FrontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
type FullstackDeveloper = 'frontendDeveloper' | 'expertDeveloper'

type Developer = FrontendDeveloper | FullstackDeveloper

const newDeveloper : FrontendDeveloper = 'juniorDeveloper'


type User = {
    name: string;
    email?: string;
    gender: 'male' | 'female';
    bloodGroup: "O+" | "A+" | "AB+"
}


const user1: User = {
    name: "Mostafiz",
    email: "mostafizdev700@gmail.com",
    gender: "male",
    bloodGroup: "A+"
}

// Interceptors  === mane sob gula logic true hoite hobe


type SuperFrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer"
}

type SuperBackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer"
}

type SuperFullstackDeveloper = SuperFrontendDeveloper & SuperBackendDeveloper


const BossFullstackDeveloper : SuperFullstackDeveloper = {
    skills: ["HTML", "CSS", "EXPRESS"],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
}


}


/// Notic...

// Union type holo. hoi aita hobe or oita hobe..
// Intercection holo sob gula true hote hobe..