export abstract class Employee{
    constructor(public firstName:string, public lastName:string,public salary:number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
class Staff extends Employee{
    constructor(firstName:string,lastName:string,salary:number,public position:string){
        super(firstName,lastName,salary)
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.salary = salary;
    }
}