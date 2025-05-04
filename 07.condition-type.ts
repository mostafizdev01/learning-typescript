{
    //conditional type 

    type a1 = number;
    type b1 = string;

    type x = a1 extends null? true: false /// conditional type || condition type holo ekhon ekta ja onno type er upor nirvor kore data return kore.

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any;


    type sheik = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    // useing keyof type on sheik | and get the value == bike | car | ship

    // car aase kina / bike ase kina / ship ase kina / plane ase kina / tractor ase kina 


    type CheckVhicle <T> = T extends keyof sheik ? true : false;

    type HasPlane = CheckVhicle<"">
}