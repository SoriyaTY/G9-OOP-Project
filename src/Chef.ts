import { Employee } from "./airplane/staff/Staff";

class Chef extends Employee {
    
    constructor(firstName:string,lastName:string,salary:number){
        super(firstName,lastName,salary)
        this.firstName= firstName;
        this.lastName = lastName;
        this.salary = salary
    }
}