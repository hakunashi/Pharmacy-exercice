import Client from "./Client";

class Pharmacy
{
    protected address : string
    protected drugName = []
    protected drugNumber = []


    constructor (address : string)
    {
        this.address = address
    }

    public addToStock(drugName : string, drugNumber : number)
    {
        var arrayName = this.drugName
        var arrayNumber = this.drugNumber
        
        arrayName.push(drugName)
        arrayNumber.push(drugNumber)
    }

    public getStock()
    {
        var stock = []
        var i = 0

        for (var name of this.drugName)
        {
            stock[i] = (this.drugName[i]+" "+this.drugNumber[i])
            i++
        }

        return stock
    }

    public treat(client : Client)
    {
        
    }
}

export default Pharmacy