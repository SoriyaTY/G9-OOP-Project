enum SeatType{
    Economy_Classic,
    Economy_Flex,
    Business_Class,
    First_Class
}

class Seat {
    constructor(public seatNumber:number, public seatType:SeatType,public price: number){
        this.seatNumber = seatNumber;
        this.seatType = seatType;
        this.price = price;
    }
}