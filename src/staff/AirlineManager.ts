import { Employee } from "./employee";

export class AirlineManager extends Employee {
    constructor(firstName:string,lastName:string,salary:number, position: string){
        super(firstName,lastName,salary, position)
        this.firstName = firstName;
        this.lastName = lastName;
    }
}