import { Gate } from "./gate/Gate";
import { Airline } from "./Airline";
import { Booking } from "./booking/Booking";
import { Airplane } from "./airplane/Airplane";
import { Chef } from "./staff/Chef";
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

    setEmployee(employee:Employee){
        this.employees.push(employee);
    }
    // I want to find out how much salary I pay all my employees.
    getAllEmployeeSalary(){
        let total:number = 0;
        this.employees.forEach(element => {
            total += element.salary;
        });
        return total;
    }

    setAirplane(airplane:Airplane){
        this.airplanes.push(airplane);
    }

    setGate(gate:Gate){
        this.gates.push(gate);
    }
    
}