import { Flight } from "./flight/Flight";
import { Passenger } from "./passenger/Passenger";
import { Seat } from "../airplane/layout/Seat";
import { Gate } from "../gate/Gate";
import { DateFlight } from "./flight/Date";
import { Time } from "./flight/Time";
export class Booking{
    constructor(public bookingReferenceNumber: string, 
        public passenger : Passenger,
        public flight: Flight, 
        public gate:Gate){}
    
}





