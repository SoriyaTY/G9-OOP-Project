"use strict";
exports.__esModule = true;
exports.Seat = exports.SeatType = void 0;
var SeatType;
(function (SeatType) {
    SeatType[SeatType["Economy_Classic"] = 0] = "Economy_Classic";
    SeatType[SeatType["Economy_Flex"] = 1] = "Economy_Flex";
    SeatType[SeatType["Business_Class"] = 2] = "Business_Class";
    SeatType[SeatType["First_Class"] = 3] = "First_Class";
})(SeatType = exports.SeatType || (exports.SeatType = {}));
var Seat = /** @class */ (function () {
    function Seat(seatNumber, seatType, price) {
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.price = price;
    }
    return Seat;
}());
exports.Seat = Seat;
