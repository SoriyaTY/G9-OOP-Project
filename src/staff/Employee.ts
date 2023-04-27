export abstract class Employee{
    constructor(public firstName:string, public lastName:string,private salary:number, private position:string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.position = position;
    }
}
