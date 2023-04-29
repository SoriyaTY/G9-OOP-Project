import { Employee } from "./Employee";
export class Chef extends Employee{
    constructor(firstName:string,lastName:string,salary:number, position: string){
        super(firstName,lastName,salary, position)
        this.firstName = firstName;
        this.lastName = lastName;
    }

}