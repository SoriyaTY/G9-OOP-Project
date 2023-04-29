"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(airplane, destination, flightNumber, departDate, arriveDate) {
        this.airplane = airplane;
        this.destination = destination;
        this.flightNumber = flightNumber;
        this.departDate = departDate;
        this.arriveDate = arriveDate;
        this.bookings = [];
        this.pilots = [];
    }
    //Add booking into flight
    Flight.prototype.addBooking = function (newBooking) {
        this.bookings.push(newBooking);
    };
    //Add Pilot into flight
    Flight.prototype.addPilot = function (pilot) {
        this.pilots.push(pilot);
    };
    return Flight;
}());
exports.Flight = Flight;
