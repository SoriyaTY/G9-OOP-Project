import { Gate } from "./gate/Gate";
import { Airline } from "./Airline";
import { Booking } from "./booking/Booking";
import { Airplane } from "./airplane/Airplane";
import { Chef } from "./staff/Chef";
export class Airport{
    public airlines: Airline[]=[];
    public gates: Gate[]=[];
    public airplanes: Airplane[]=[];
    public bookings: Booking[]=[]
    public chef : Chef[]=[];
    constructor(public airportName: string, public address: string){
        this.airportName = airportName;
        this.address = address;
    }
    // Add booking into airport 
    addBooking(booking: Booking){
        this.bookings.push(booking);
    }

    //Get full Detail of passenger by booking Reference Number
    getPassengerInfo(bookingRefNum: string){
        for(let booking of this.bookings){
            if(bookingRefNum == booking.bookingReferenceNumber){
                return booking;
            }
        }
    }
}