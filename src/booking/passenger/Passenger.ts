export enum MealType{
    vegetarian = 'vegetarian', 
    vegan = 'vegan', 
    dairy_free = 'dairy_free', 
    Halal = 'Halal', 
    Kosher = 'Kosher',
    forth = 'forth'
}
export class Passenger{
    
    constructor (public firstName:string, 
        public lastName:string,
        public eatTypes: MealType,
        public bagNumber: number, 
        private phoneNumber: string, 
        private email:string, 
        private creaditCard:string){
    
        this.firstName = firstName;
        this.lastName = lastName;
        this.bagNumber = bagNumber;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.creaditCard = creaditCard;
    }

}

