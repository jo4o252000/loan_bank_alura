import Person from "../interface/customer";

class AnalyzeCustomer{
    static loanSuggestion = (req, res) => {
        let personData:Person = req.body
        res.status(200).json(personData)
    }
}

export default  AnalyzeCustomer