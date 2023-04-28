import { Route } from "./Route";
import { Airplane } from "../../airplane/Airplane";
import { Booking } from "../Booking";
import { MealType } from "../passenger/Passenger";
import { Datetime } from "./Datetime";
export class Flight{
    public bookings: Booking[]=[]
    constructor(
        public airplane: Airplane,
        public destination: Route,
        public flightNumber:string, 
        protected departDate: Datetime, 
        protected arriveDate: Datetime, ) {}

        //Add booking into flight
        addBooking(newBooking:Booking){
            this.bookings.push(newBooking);
        }
        
}
    


