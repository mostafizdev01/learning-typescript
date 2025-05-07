{

    // learn static...

    class Counter {
       static count: number = 0;


        increment (){  /// static use korle this er jaigai Class name == Counter use korte hobe..
            return (Counter.count = Counter.count + 1);  // count er man er sate amara 1 jog kortesi
        }
        decrement (){
            return (Counter.count = Counter.count + 1);   // count er man er sate amara 1 biyog kortesi 
        }
    }


    // const instance1 = new Counter ();
    console.log(Counter.count);
    
    // const instance2 = new Counter ();
    console.log(Counter.count);
    

}