enum MealType{
    vegetarian, 
    vegan, 
    dairy_free, 
    Halal, 
    Kosher,
    forth
}
export class Passenger{
    public eatType: MealType[]=[]
    constructor (public firstName:string, public lastName:string, private phoneNumber:number, private email:string, private creaditCard:string,eatType: MealType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.creaditCard = creaditCard;
    }
}

