
import { Passenger,MealType } from "./booking/passenger/Passenger";
import { Airport } from "./Airport";
import { Flight } from "./booking/flight/Flight";
import { Airplane } from "./airplane/Airplane";
import { Datetime } from "./booking/flight/Datetime";
import { Route } from "./booking/flight/Route";
import { Seat,SeatType } from "./airplane/layout/Seat";
import { Gate } from "./gate/Gate";
import { Booking } from "./booking/Booking";
import { Layout } from "./airplane/layout/Layout";
import { Pilot } from "./booking/flight/Pilot";

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
let passenger03 = new Passenger('YUI','ooo', 24 , '8320832048', 'lii@gamail.com', '3854');

//SetMealType
passenger01.setEatType(MealType.Kosher);
passenger02.setEatType(MealType.dairy_free);
passenger02.setEatType(MealType.Kosher);
passenger02.setEatType(MealType.dairy_free);

//Depart&Arrive
let departDate01 = new Datetime(2,30,'Mon 12','May',2023);
let departDate03 = new Datetime(2,30,'Mon 13','May',2023);
let arriveDate01 = new Datetime(1,10,'Tues 13','May',2023);
let arriveDate03 = new Datetime(1,10,'Tues 15','May',2023);


//Create Route
let route01 = new Route('PP', 'US');

//Create new gate
let gate1 = new Gate(12);
let gate2 = new Gate(10);

//Create new flights
let flight01 = new Flight(airplane01, route01, 'AY6404', departDate01, arriveDate01);
let flight02 = new Flight(airplane01, route01, 'AY6404', departDate03, arriveDate03);
let flight03 = new Flight(airplane01, route01, 'AY6404', departDate03, arriveDate03);


//Create Booking
let booking01 = new Booking('DGG2743', passenger01,flight01 , gate1);
let booking02 = new Booking('DGG2678', passenger02,flight02 , gate2);
let booking03 = new Booking('E839508', passenger03, flight03, gate2);


//Add booking into flight
flight01.addBooking(booking01);
flight01.addBooking(booking02);
flight02.addBooking(booking01);
flight02.addBooking(booking02);
flight03.addBooking(booking01);
flight03.addBooking(booking02);

//Create Pilot
let pilot01 = new Pilot('dfj', 'dfsd', 233, 'ghj')
let pilot02 = new Pilot('Dav', 'dfjs', 23345, 'sdfs')
//Add pilot into flight
flight01.addPilot(pilot01)
flight02.addPilot(pilot02);
flight03.addPilot(pilot02);

//Add flight into pilot 
pilot01.addFlight(flight01);
pilot02.addFlight(flight02);
pilot02.addFlight(flight03);

//Add booking into airport 
airport.addBooking(booking01);
airport.addBooking(booking02);

//get Information Of passenger 
airport.getPassengerInfo('DGG2743');

//Find flight that passenger have to join by date

console.log(pilot02.getFlight('Mon 13'))


