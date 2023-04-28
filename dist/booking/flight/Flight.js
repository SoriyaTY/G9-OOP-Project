"use strict";
exports.__esModule = true;
exports.Flight = void 0;
var Flight = /** @class */ (function () {
    function Flight(airplane, destination, flightNumber, departDate, departTime, arriveDate, arriveTime) {
        this.airplane = airplane;
        this.destination = destination;
        this.flightNumber = flightNumber;
        this.departDate = departDate;
        this.departTime = departTime;
        this.arriveDate = arriveDate;
        this.arriveTime = arriveTime;
        this.bookings = [];
    }
    Flight.prototype.addBooking = function (newBooking) {
        this.bookings.push(newBooking);
    };
    return Flight;
}());
exports.Flight = Flight;
