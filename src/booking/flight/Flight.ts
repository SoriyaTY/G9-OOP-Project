
import { Time } from "./Time";
import { Route } from "./Route";
import { DateFlight } from "./Date";
import { Airplane } from "../../airplane/Airplane";
import { Booking } from "../Booking";
export class Flight{
    public bookings: Booking[]=[]
    constructor(
        public airplane: Airplane,
        public destination: Route,
        public flightNumber:string, 
        protected departDate: DateFlight, 
        protected departTime: Time, 
        protected arriveDate: DateFlight, 
        protected arriveTime: Time) {}

        addBooking(newBooking:Booking){
            this.bookings.push(newBooking);
        }

}
    


