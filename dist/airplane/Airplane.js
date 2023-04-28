"use strict";
exports.__esModule = true;
exports.Airplane = void 0;
var Airplane = /** @class */ (function () {
    function Airplane(airplaneName, airplaneNumber) {
        this.airplaneName = airplaneName;
        this.airplaneNumber = airplaneNumber;
        this.layouts = [];
        this.airplaneName = airplaneName;
        this.airplaneNumber = airplaneNumber;
    }
    Airplane.prototype.setLayout = function (layout) {
        this.layouts.push(layout);
    };
    return Airplane;
}());
exports.Airplane = Airplane;
