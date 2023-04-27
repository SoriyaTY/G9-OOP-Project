
import { Time } from "./Time";
import { DateFlight } from "./Date";
export class Flight{
    constructor(public flightNumber:number, 
        public airplaneNumber:string, 
        protected departDate: DateFlight, 
        protected departTime: Time, 
        protected arriveDate: DateFlight, 
        protected arriveTime: Time) {
        this.flightNumber = flightNumber;
        this.airplaneNumber = airplaneNumber;
        this.departDate = departDate;
        this.departTime = departTime;
        this.arriveDate = arriveDate;
        this.arriveTime = arriveTime;

    }
}

