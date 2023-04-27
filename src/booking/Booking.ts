import { Flight } from "./flight/Flight";
import { Passenger } from "./passenger/Passenger";
import { Seat } from "../airplane/layout/Seat";
import { Gate } from "../gate/Gate";
export class Booking{
    
    constructor( firstName: Passenger, lastName: Passenger, public departDistination: string, public arriveDistination: string, flightNumber: Flight, departDate: Flight,departTime: Flight,arriveDate: Flight,arriveTime: Flight,  seatNumber: Seat, gateNumber: Gate){
    }
}

