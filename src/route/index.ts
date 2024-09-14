import express, {Request,Response} from 'express'
import analyzeCustomer from './analyzeCustomer'


const routes = (app:any) => {
    app.route("/").get((req: Request, res:Response) => {
        res.status(200).send({titulo: "Loan Bank"})
    })
    app.use(
        express.json(),
        analyzeCustomer,
    )
}

export default routes