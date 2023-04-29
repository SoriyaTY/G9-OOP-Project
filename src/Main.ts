
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
import { Chef } from "./staff/Chef";

//Create a new airport
let airport = new Airport('PhnomPenhAirport', 'PP');

//Create  new airplane
let airplane01 = new Airplane('PhnomPenhAirplane', 'PNH');
let airplane02 = new Airplane('PatayaAirport', 'Singapore');


airport.setAirplane(airplane01);
airport.setAirplane(airplane02);

//Create Layout
let layout01 = new Layout(3, 3);
let layout02 = new Layout(3, 3);

//set Layout into airplane
airplane01.setLayout(layout01);
airplane02.setLayout(layout02);

//Create new Seat
let seat01= new Seat(1, SeatType.Business_Class, 100);
let seat02= new Seat(2, SeatType.Business_Class, 107);

//Get seat 


//Create new passengers
let passenger01 = new Passenger('LII','da', 23 , '8320832048', 'lii@gamail.com', '38597');
let passenger02 = new Passenger('DDD','LLL', 24 , '8320832048', 'lii@gamail.com', '3854');

//SetMealType
passenger01.setEatType(MealType.Kosher);
passenger01.setEatType(MealType.vegan);
passenger02.setEatType(MealType.dairy_free);
passenger02.setEatType(MealType.forth);

//Depart&Arrive
let departDate = new Datetime(2,30,'Mon 12','May',2023);
let arriveDate = new Datetime(1,10,'Tues 13','May',2023);

//Create Route
let route01 = new Route('PP', 'US');
let route02 = new Route('Pataya', 'Singpore');

//Create new gate
let gate1 = new Gate(12);
let gate2 = new Gate(10);

//Create new flights
let flight01 = new Flight(airplane01, route01, 'AY6404', departDate, arriveDate);
let flight02 = new Flight(airplane02, route02, 'TY0789', departDate, arriveDate);

//Create Booking
let booking01 = new Booking('DGG2743', passenger01,flight01 , gate1);
let booking02 = new Booking('DGG2678', passenger02,flight02 , gate2);

//Add booking into flight
flight01.addBooking(booking01);
flight01.addBooking(booking02);

//Add booking into airport 
airport.addBooking(booking01);
airport.addBooking(booking02);

//get Information Of passenger 
airport.getPassengerInfo('DGG2743');

//get MealType for chef to prepare 
airport.getMealtoPrepare('TY0789');

//add employee 
let pilot = new Pilot('Him','Hey',1500,'Pilot');
let coPilot = new Pilot('Soriya','Ho',1200,'Co-Pilot');

let chef = new Chef('Phin','Lek',250,'Chef');

airport.setEmployee(pilot);
airport.setEmployee(coPilot);
airport.setEmployee(chef);

airport.employees;

// find out how much salary I pay all my employees
airport.getAllEmployeeSalary();

// I want to know which gate my plane is waiting at
airport.setGate(gate1);
airport.setGate(gate2);
console.log(airport.gates);