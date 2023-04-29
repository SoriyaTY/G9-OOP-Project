import { Employee } from "../../staff/Employee";
import { Datetime } from "./Datetime";
import { Flight } from "./Flight";

export class Pilot extends Employee{
    public flights: Flight[]=[];
    constructor(firstName:string,lastName:string,salary:number, position: string){
        super(firstName,lastName,salary, position)
        this.firstName= firstName;
        this.lastName = lastName;
    }
    //Add Flight into Pilot
    addFlight(flight: Flight){
        this.flights.push(flight);
    }

    //Get flight by date
    getFlight(date: string){
        for(let i=0; i<this.flights.length; i++){
            console.log(this.flights)
            let CountFlight = 0;
            if(date === this.flights[i]['departDate']['day']){
                return 'You have '+ this.flights.length +' flight to join.';
            }
        }
        return "You don't have flight to join";
    }
}