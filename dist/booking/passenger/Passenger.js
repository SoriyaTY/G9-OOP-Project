"use strict";
exports.__esModule = true;
exports.Passenger = exports.MealType = void 0;
var MealType;
(function (MealType) {
    MealType["vegetarian"] = "vegetarian";
    MealType["vegan"] = "vegan";
    MealType["dairy_free"] = "dairy_free";
    MealType["Halal"] = "Halal";
    MealType["Kosher"] = "Kosher";
    MealType["forth"] = "forth";
})(MealType = exports.MealType || (exports.MealType = {}));
var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, bagNumber, phoneNumber, email, creaditCard) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.bagNumber = bagNumber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.creaditCard = creaditCard;
        this.eatTypes = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.bagNumber = bagNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.creaditCard = creaditCard;
    }
    Passenger.prototype.setEatType = function (eatType) {
        this.eatTypes.push(eatType);
    };
    return Passenger;
}());
exports.Passenger = Passenger;
