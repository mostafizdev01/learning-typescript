{
    class BankAccount {
       public id: number;   // this is public property and access the global scope 
       public name: string; // this is public property and access the global scope 
        protected _balance: number /// only access localscope || [_] this is anventionaly/private property


        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        addDeposit(depositAmount: number){
            this._balance = this._balance + depositAmount;
        }

        getBalance(){
            return this._balance;
        }
    }

    class studentAccount extends BankAccount{
        test(){
           return this._balance
        }
    }

    const GoribAccount = new BankAccount (23, "Dutch Bangla Bank", 20)
    GoribAccount.addDeposit(70)
    console.log(GoribAccount.getBalance());
    

}

/// Notic ..

// jodi emon kono kaj hoy jokhon amader parent class er kono kicu child class a use korle but secure vabe tokhon amara ==>>  protected  <<== use korbo.