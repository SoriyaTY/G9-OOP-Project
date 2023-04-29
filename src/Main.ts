
import { Passenger,MealType } from "./booking/passenger/Passenger";
import { Airport } from "./Airport";
import { Flight } from "./booking/flight/Flight";
import { Airplane } from "./airplane/Airplane";
import { Datetime } from "./booking/flight/Datetime";
import { Route } from "./booking/flight/Route";
import { Seat,SeatType } from "./airplane/layout/Seat";
import { Gate } from "./gate/Gate";
import { Booking, BookingType } from "./booking/Booking";
import { Layout } from "./airplane/layout/Layout";
import { Pilot } from "./booking/flight/Pilot";

//Create a new airport
let airport = new Airport('PhnomPenhAirport', 'PP');

//Create  new airplane
let airplane01 = new Airplane('PhnomPenhAirplane', 'OH-LAP');
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
let passenger01 = new Passenger('Phin','Lek',MealType.Kosher,23 , '8320832048', 'phinlek@gamail.com', '38597');
let passenger02 = new Passenger('Thana','Choeun', MealType.forth,24 , '8320832048', 'thanachoeun@gamail.com', '3854');
let passenger03 = new Passenger('Ploy','Heng', MealType.vegetarian,24 , '8320832048', 'ployheng@gamail.com', '3854');


//Depart&Arrive
let departDate01 = new Datetime(2,30,'12','May',2023);
let departDate03 = new Datetime(2,30,'13','May',2023);
let arriveDate01 = new Datetime(1,10,'13','May',2023);
let arriveDate03 = new Datetime(1,10,'15','May',2023);


//Create Route
let route01 = new Route('PP', 'US');
let route02 = new Route('Pataya', 'Singpore');

//Create new gate
let gate1 = new Gate(12);
let gate2 = new Gate(10);

//Create new flights
let flight01 = new Flight(airplane01, route01, 'AY6404', departDate01, arriveDate01);
let flight02 = new Flight(airplane01, route01, 'AY6402', departDate03, arriveDate03);
let flight03 = new Flight(airplane01, route01, 'AY6403', departDate03, arriveDate03);

//Create Booking
let booking01 = new Booking('DGG2743', passenger01,flight01 ,BookingType.returnBooking, gate1);
let booking02 = new Booking('DGG2678', passenger02,flight01 ,BookingType.returnBooking, gate2);
let booking03 = new Booking('E839508', passenger03, flight01,BookingType.returnBooking, gate2);

//Add booking into flight
flight01.addBooking(booking01);
flight01.addBooking(booking02);
flight01.addBooking(booking03);


//Create Pilot
let pilot01 = new Pilot('Soriya', 'Ho', 1200, 'Pilot');
let pilot02 = new Pilot('Dav', 'Thoeuun', 1200, 'Pilot');

//Add pilot into flight
flight01.addPilot(pilot01);
flight02.addPilot(pilot02);
flight03.addPilot(pilot02);

//Add flight into pilot 
pilot01.addFlight(flight01);
pilot02.addFlight(flight02);
pilot02.addFlight(flight03);

//Add booking into airport 
airport.addBooking(booking01);
airport.addBooking(booking02);
airport.addBooking(booking03);

//get Information Of passenger 
airport.getPassengerInfo('DGG2743');

// I want to know which gate my plane is waiting at.
airport.setGate(gate1);
airport.setGate(gate2);
airport.getGate("OH-LAP");
//Find flight that passenger have to join by date
console.log(pilot01.getFlight('13'));

//Given flightNumber to find return ticket
airport.passengerReturnTicket('AY6404');
