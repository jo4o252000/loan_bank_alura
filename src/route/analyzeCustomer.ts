import express from 'express'
import AnalyzeCustomer from '../controller/AnalyzeCustomer'

const route = express.Router()

route.post('/customer-loans', AnalyzeCustomer.loanSuggestion)

export default route