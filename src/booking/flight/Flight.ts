import { Route } from "./Route";
import { Airplane } from "../../airplane/Airplane";
import { Booking } from "../Booking";
import { MealType } from "../passenger/Passenger";
import { Datetime } from "./Datetime";
import { Pilot } from "./Pilot";
export class Flight{
    public bookings: Booking[]=[]
    public pilots: Pilot[]=[]
    constructor(
        public airplane: Airplane,
        public destination: Route,
        public flightNumber:string, 
        public departDate: Datetime, 
        public arriveDate: Datetime, ) {}

        //Add booking into flight
        addBooking(newBooking:Booking){
            this.bookings.push(newBooking);
        }

        //Add Pilot into flight
        addPilot(pilot: Pilot){
            this.pilots.push(pilot);
        }
        
}
    


