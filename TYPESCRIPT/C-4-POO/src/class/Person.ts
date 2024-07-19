export class Person{
    firstName: string;
    lastName : string;


    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    gretting(): void{
        console.log(`Hello, ${this.firstName} ${this.lastName}`);
        
    }

    eat(food: string): void{
        console.log(`${this.firstName} is eating ${food}`);
        
    }

    brushTeeth(): void{
        console.log(`${this.firstName} is brushing their teeth`);
        
    }
}

