
import { Passenger,MealType } from "./booking/passenger/Passenger";
import { Airport } from "./Airport";
import { Flight } from "./booking/flight/Flight";
import { Airplane } from "./airplane/Airplane";
import { DateFlight } from "./booking/flight/Date";
import { Time } from "./booking/flight/Time";
import { Route } from "./booking/flight/Route";
import { Seat,SeatType } from "./airplane/layout/Seat";
import { Gate } from "./gate/Gate";
import { Booking } from "./booking/Booking";
import { Layout } from "./airplane/layout/Layout";

//Create a new airport
let airport = new Airport('PhnomPenhAirport', 'PP');

//Create  new airplane
let airplane01 = new Airplane('PhnomPenhAirplane', 'PNH')

//Create Layout
let layout01 = new Layout(3, 3);
let layout02 = new Layout(3, 3);

//set Layout into airplane
airplane01.setLayout(layout01);

//Create new Seat
let seat01= new Seat(1, SeatType.Business_Class, 100);
let seat02= new Seat(2, SeatType.Business_Class, 107);

//Get seat 


//Create new passengers
let passenger01 = new Passenger('LII','da', 23 , '8320832048', 'lii@gamail.com', '38597');
let passenger02 = new Passenger('DDD','LLL', 24 , '8320832048', 'lii@gamail.com', '3854');

//SetMealType
passenger01.setEatType(MealType.Kosher);
passenger02.setEatType(MealType.dairy_free);

//Depart&Arrive
let DepartDate = new DateFlight('Mon 12', 'Jan', 2022)
let DapartTime = new Time(30, 2)
let ArrDate = new DateFlight('Wed15', 'Jan', 2022)
let ArrTime = new Time(10, 3);

//Create Route
let route01 = new Route('PP', 'US');

//Create new gate
let gate1 = new Gate(12);
let gate2 = new Gate(10);


//Create new flights
let flight01 = new Flight(airplane01, route01, 'AY6404', DepartDate, DapartTime, ArrDate, ArrTime);

//Create Booking
let booking01 = new Booking('DGG2743', passenger01,flight01 , gate1);
console.log(booking01);
