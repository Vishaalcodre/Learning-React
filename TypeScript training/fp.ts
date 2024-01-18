console.log("Hello!")
class Trainer {
    private fname: string;
    private age: number;

    constructor(Fname:string, Age:number){
        this.fname = Fname;
        this.age = Age;
    }

    public get Age(): number {
        return this.age;
    }
    
    public set Age(value: number) {
        this.age = value;
    }

    public get firstName(){
        return this.fname;
    }

    public set firstName(value:string){
        this.fname = this.firstName;
    }

    
}

let myTrainer = new Trainer("Vishal", 22);

myTrainer.firstName = "Vishal";

console.log(myTrainer.firstName);