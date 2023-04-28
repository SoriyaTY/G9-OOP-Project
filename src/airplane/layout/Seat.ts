export enum SeatType{
    Economy_Classic,
    Economy_Flex,
    Business_Class,
    First_Class
}

export class Seat {
    constructor(public seatNumber:number, public seatType:SeatType,public price: number){
    }
}