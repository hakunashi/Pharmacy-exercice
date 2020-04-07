class Order

{
    protected doctor : string
    protected client : string
    protected drugName : string

    constructor (doctor : string, client : string, drugName : string)
    {
        this.doctor = doctor
        this.client = client
        this.drugName = drugName
    }
}

export default Order