import { Layout } from "./layout/Layout";

export class Airplane{
    public layouts: Layout[]=[]
    constructor(public airplaneName: string, public airplaneNumber: string){
        this.airplaneName = airplaneName;
        this.airplaneNumber = airplaneNumber;
    }

    setLayout(layout: Layout){
        this.layouts.push(layout);
    }
}