import { Gate } from "./gate/Gate";
import { Airline } from "./Airline";
import { Booking, BookingType } from "./booking/Booking";
import { Airplane } from "./airplane/Airplane";
import { Employee } from "./staff/Employee";
export class Airport{
    
    public airlines: Airline[]=[];
    public gates: Gate[]=[];
    public airplanes: Airplane[]=[];
    public bookings: Booking[]=[];
    public employees : Employee[]=[];
    constructor(public airportName: string, 
        public address: string){}

    // Add booking into airport 
    addBooking(booking: Booking){
        this.bookings.push(booking);
    }

    //set airplane into airport
    setAirplane(airplane:Airplane){
        this.airplanes.push(airplane);
    }

    //Get full Detail of passenger by booking Reference Number
    getPassengerInfo(bookingRefNum: string){
        for(let booking of this.bookings){
            if(bookingRefNum == booking.flight.flightNumber){
                return booking;
            }
        }
    }

    //Get all mealType for chef by give flightNumber
    getMealtoPrepare(flightNumber:string){
        let listMeal:string[]=[];
        for (let booking of this.bookings){
            if(flightNumber == booking.flight.flightNumber){
                for (let meal of booking.passenger.eatTypes){
                    listMeal.push(meal);
                }
            }
        }
        return listMeal;
    }

    // find out how much salary I pay all my employees.
    setEmployee(employee:Employee){
        this.employees.push(employee);
    }
    getAllEmployeeSalary(){
        let total:number = 0;
        this.employees.forEach(element => {
            total += element.salary;
        });
        return total;
    }


    // Get which gate my plane is waiting at.
    setGate(gate:Gate){
        this.gates.push(gate);
    }
    getGate(planeNumber:string){
        let index:number = 0;
        let test = 'It is not your Flight Today.'
        this.airplanes.forEach(plane => {
            index += 1;
            if(plane['airplaneNumber'] == planeNumber && 
            this.gates[index-1]['gateNumber'] == this.bookings[index-1]['gate']['gateNumber']){
                test = "Gate is: "+this.gates[index-1]['gateNumber'];
            }
        });
        return test;
    }
    //given flightNumber that find passenger return ticket
    passengerReturnTicket(flightNumber: string){
        let countPassengerTicket =0;
        for(let i=0; i<this.bookings.length; i++){
           if(flightNumber == this.bookings[i].flight.flightNumber){
                if(this.bookings[i].bookingType==BookingType.returnBooking){
                     countPassengerTicket +=1
                }  
           }
        }
        return countPassengerTicket ;
    }
}