import Person from "./Person"
import Order from "./Order"

class Client extends Person
{
    protected firstName : string
    protected lastName : string
    protected money : number
    protected sickness : string
    protected order : Order

    constructor (firstName : string, lastName : string, money : number, sickness : string,)
    {
        super (firstName, lastName)
        this.money = money
        this.sickness = sickness
    }

    public setOrder(order : Order)
    {
        this.order = order
    }

    public getOrder()
    {
        return this.order
    }

    public getSickness()
    {
        return this.sickness
    }

    public getFirstName()
    {
        return this.firstName
    }

    public getLastName()
    {
        return this.lastName
    }

    public getMoney(number : number)
    {
        this.money = this.money - number
        return this.money
    }    
}

export default Client