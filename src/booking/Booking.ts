import { Flight } from "./flight/Flight";
import { Passenger } from "./passenger/Passenger";
import { Seat } from "../airplane/layout/Seat";
import { Gate } from "../gate/Gate";
import { Datetime } from "./flight/Datetime";

export enum BookingType{
    booking='Booking',
    returnBooking = 'Return_Booking'
}
export class Booking{
    constructor(public bookingReferenceNumber: string, 
        public passenger : Passenger,
        public flight: Flight,
        public bookingType: BookingType, 
        public gate:Gate){}
    
}







