enum MealType{
    vegetarian, 
    vegan, 
    dairy_free, 
    Halal, 
    Kosher,
    forth
}
class Passenger{
    public eatType: MealType[]=[]
    constructor (public firstName:string, public lastName:string, public phoneNumber:number, public email:string, public creaditCard:string,eatType: MealType){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.creaditCard = creaditCard;
    }
}

