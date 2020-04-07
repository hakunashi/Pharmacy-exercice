class Drug
{
    protected nameDrug : string
    protected price : number

    constructor (nameDrug : string, price : number)
    {
        this.nameDrug = nameDrug
        this.price = price
    }

    public getDrugName()
    {
        return this.nameDrug
    }
}

export default Drug