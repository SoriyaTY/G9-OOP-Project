"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Pilot = void 0;
var Employee_1 = require("../../staff/Employee");
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(firstName, lastName, salary, position) {
        var _this = _super.call(this, firstName, lastName, salary, position) || this;
        _this.flights = [];
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    //Add Flight into Pilot
    Pilot.prototype.addFlight = function (flight) {
        this.flights.push(flight);
    };
    //Get flight by date
    Pilot.prototype.getFlight = function (date) {
        for (var i = 0; i < this.flights.length; i++) {
            console.log(this.flights);
            var CountFlight = 0;
            if (date === this.flights[i]['departDate']['day']) {
                return 'You have ' + this.flights.length + ' flight to join.';
            }
        }
        return "You don't have flight to join";
    };
    return Pilot;
}(Employee_1.Employee));
exports.Pilot = Pilot;
