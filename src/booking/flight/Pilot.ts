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
        let countFlight = 0;
        for(let i=0; i<this.flights.length; i++){
            if(date === this.flights[i]['departDate']['day']){
                countFlight += 1;
            }
        }
        if(countFlight!=0){
            return 'You have '+ countFlight + ' flight to join.';
        }
        return countFlight;
    }
}