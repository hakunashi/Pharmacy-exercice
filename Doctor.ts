import Person from "./Person"
import Client from "./Client"
import Drug from "./Drug"
import Order from "./Order"

class Doctor extends Person
{
    protected firstName : string
    protected lastName : string
    protected price : number

    constructor (firstName : string, lastName : string, price : number)
    {
        super (firstName, lastName)
        this.price = price
    }

    public treat(client : Client)
    {
        var sick = client.getSickness()
        var cure : Order
        if (sick === "stomack ache")
        {
            var drug = new Drug ("spasfon", 3.5)
            cure = new Order (this.firstName+" "+this.lastName, client.getFirstName()+" "+client.getLastName(), drug.getDrugName())
            return cure
        }
        else if (sick === "head ache")
        {
            var drug = new Drug ("paracetamol", 3)
            cure = new Order (this.firstName+" "+this.lastName, client.getFirstName()+" "+client.getLastName(), drug.getDrugName())
            return cure
        }
        else
        {
            cure = new Order (this.firstName+" "+this.lastName, client.getFirstName()+" "+client.getLastName(), "no refer")
            return cure
        }
    }

    public getPrice()
    {
        return this.price
    }
}

export default Doctor