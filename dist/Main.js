"use strict";
exports.__esModule = true;
var Passenger_1 = require("./booking/passenger/Passenger");
var Airport_1 = require("./Airport");
var Flight_1 = require("./booking/flight/Flight");
var Airplane_1 = require("./airplane/Airplane");
var Datetime_1 = require("./booking/flight/Datetime");
var Route_1 = require("./booking/flight/Route");
var Seat_1 = require("./airplane/layout/Seat");
var Gate_1 = require("./gate/Gate");
var Booking_1 = require("./booking/Booking");
var Layout_1 = require("./airplane/layout/Layout");
var Pilot_1 = require("./booking/flight/Pilot");
//Create a new airport
var airport = new Airport_1.Airport('PhnomPenhAirport', 'PP');
//Create  new airplane
var airplane01 = new Airplane_1.Airplane('PhnomPenhAirplane', 'PNH');
//Create Layout
var layout01 = new Layout_1.Layout(3, 3);
var layout02 = new Layout_1.Layout(3, 3);
//set Layout into airplane
airplane01.setLayout(layout01);
//Create new Seat
var seat01 = new Seat_1.Seat(1, Seat_1.SeatType.Business_Class, 100);
var seat02 = new Seat_1.Seat(2, Seat_1.SeatType.Business_Class, 107);
//Get seat 
//Create new passengers
var passenger01 = new Passenger_1.Passenger('LII', 'da', 23, '8320832048', 'lii@gamail.com', '38597');
var passenger02 = new Passenger_1.Passenger('DDD', 'LLL', 24, '8320832048', 'lii@gamail.com', '3854');
var passenger03 = new Passenger_1.Passenger('YUI', 'ooo', 24, '8320832048', 'lii@gamail.com', '3854');
//SetMealType
passenger01.setEatType(Passenger_1.MealType.Kosher);
passenger02.setEatType(Passenger_1.MealType.dairy_free);
passenger02.setEatType(Passenger_1.MealType.Kosher);
passenger02.setEatType(Passenger_1.MealType.dairy_free);
//Depart&Arrive
var departDate01 = new Datetime_1.Datetime(2, 30, 'Mon 12', 'May', 2023);
var departDate03 = new Datetime_1.Datetime(2, 30, 'Mon 13', 'May', 2023);
var arriveDate01 = new Datetime_1.Datetime(1, 10, 'Tues 13', 'May', 2023);
var arriveDate03 = new Datetime_1.Datetime(1, 10, 'Tues 15', 'May', 2023);
//Create Route
var route01 = new Route_1.Route('PP', 'US');
//Create new gate
var gate1 = new Gate_1.Gate(12);
var gate2 = new Gate_1.Gate(10);
//Create new flights
var flight01 = new Flight_1.Flight(airplane01, route01, 'AY6404', departDate01, arriveDate01);
var flight02 = new Flight_1.Flight(airplane01, route01, 'AY6404', departDate03, arriveDate03);
var flight03 = new Flight_1.Flight(airplane01, route01, 'AY6404', departDate03, arriveDate03);
//Create Booking
var booking01 = new Booking_1.Booking('DGG2743', passenger01, flight01, gate1);
var booking02 = new Booking_1.Booking('DGG2678', passenger02, flight02, gate2);
var booking03 = new Booking_1.Booking('E839508', passenger03, flight03, gate2);
//Add booking into flight
flight01.addBooking(booking01);
flight01.addBooking(booking02);
flight02.addBooking(booking01);
flight02.addBooking(booking02);
flight03.addBooking(booking01);
flight03.addBooking(booking02);
//Create Pilot
var pilot01 = new Pilot_1.Pilot('dfj', 'dfsd', 233, 'ghj');
var pilot02 = new Pilot_1.Pilot('Dav', 'dfjs', 23345, 'sdfs');
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
//get Information Of passenger 
airport.getPassengerInfo('DGG2743');
//Find flight that passenger have to join by date
console.log(pilot02.getFlight('Mon 13'));
