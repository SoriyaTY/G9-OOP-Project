import { Gate } from "./gate/Gate";
import { Airline } from "./Airline";
import { Booking } from "./booking/Booking";
import { Airplane } from "./airplane/Airplane";
import { Chef } from "./staff/Chef";
export class Airport{
    public airlines: Airline[]=[];
    public gates: Gate[]=[];
    public airplanes: Airplane[]=[];
    public booking: Booking[]=[];
    public chef : Chef[]=[];
    constructor(public airportName: string, public address: string){
        this.airportName = airportName;
        this.address = address;
    }
}