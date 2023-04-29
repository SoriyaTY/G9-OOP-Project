export enum SeatType{
    Economy_Classic = 'Economy Classic',
    Economy_Flex = 'Economy Flex',
    Business_Class = 'Business Class',
    First_Class = 'First Class'
}

export class Seat {
    constructor(public seatNumber:number, 
        public seatType:SeatType,
        public price: number){}
}