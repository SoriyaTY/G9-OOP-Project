import { Employee } from "../../staff/Employee";

export class Pilot extends Employee{
    constructor(firstName:string,lastName:string,salary:number, position: string){
        super(firstName,lastName,salary, position)
        this.firstName= firstName;
        this.lastName = lastName;
    }
}