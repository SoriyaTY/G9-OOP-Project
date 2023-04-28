import { Seat } from "./Seat";

export class Layout{
    public seats: Seat[]=[];
    constructor(public rowSeat:number, public columnSeat:number){
        this.rowSeat = rowSeat;
        this.columnSeat = columnSeat;
    }

}