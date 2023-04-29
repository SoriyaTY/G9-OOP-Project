"use strict";
exports.__esModule = true;
exports.Airport = void 0;
var Airport = /** @class */ (function () {
    function Airport(airportName, address) {
        this.airportName = airportName;
        this.address = address;
        this.airlines = [];
        this.gates = [];
        this.airplanes = [];
        this.bookings = [];
        this.chef = [];
        this.airportName = airportName;
        this.address = address;
    }
    // Add booking into airport 
    Airport.prototype.addBooking = function (booking) {
        this.bookings.push(booking);
    };
    //Get full Detail of passenger by booking Reference Number
    Airport.prototype.getPassengerInfo = function (bookingRefNum) {
        for (var _i = 0, _a = this.bookings; _i < _a.length; _i++) {
            var booking = _a[_i];
            if (bookingRefNum == booking.bookingReferenceNumber) {
                return booking;
            }
        }
    };
    return Airport;
}());
exports.Airport = Airport;
