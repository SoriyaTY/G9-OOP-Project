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
        this.booking = [];
        this.chef = [];
        this.airportName = airportName;
        this.address = address;
    }
    return Airport;
}());
exports.Airport = Airport;
