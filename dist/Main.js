"use strict";
exports.__esModule = true;
var Passenger_1 = require("./booking/passenger/Passenger");
var Airport_1 = require("./Airport");
var Flight_1 = require("./booking/flight/Flight");
var Airplane_1 = require("./airplane/Airplane");
var Date_1 = require("./booking/flight/Date");
var Time_1 = require("./booking/flight/Time");
var Route_1 = require("./booking/flight/Route");
var Seat_1 = require("./airplane/layout/Seat");
var Gate_1 = require("./gate/Gate");
var Booking_1 = require("./booking/Booking");
var Layout_1 = require("./airplane/layout/Layout");
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
//SetMealType
passenger01.setEatType(Passenger_1.MealType.Kosher);
passenger02.setEatType(Passenger_1.MealType.dairy_free);
//Depart&Arrive
var DepartDate = new Date_1.DateFlight('Mon 12', 'Jan', 2022);
var DapartTime = new Time_1.Time(30, 2);
var ArrDate = new Date_1.DateFlight('Wed15', 'Jan', 2022);
var ArrTime = new Time_1.Time(10, 3);
//Create Route
var route01 = new Route_1.Route('PP', 'US');
//Create new gate
var gate1 = new Gate_1.Gate(12);
var gate2 = new Gate_1.Gate(10);
//Create new flights
var flight01 = new Flight_1.Flight(airplane01, route01, 'AY6404', DepartDate, DapartTime, ArrDate, ArrTime);
//Create Booking
var booking01 = new Booking_1.Booking('DGG2743', passenger01, flight01, gate1);
console.log(booking01);
