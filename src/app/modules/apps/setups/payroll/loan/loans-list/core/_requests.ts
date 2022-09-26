import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Loan, LoansQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const LOAN_URL = `${API_URL}/user`
const GET_LOANS_URL = `${API_URL}/users/query`

const getLoans = (query: string): Promise<LoansQueryResponse> => {
  return axios
    .get(`${GET_LOANS_URL}?${query}`)
    .then((d: AxiosResponse<LoansQueryResponse>) => d.data)
}

const getLoanById = (id: ID): Promise<Loan | undefined> => {
  return axios
    .get(`${LOAN_URL}/${id}`)
    .then((response: AxiosResponse<Response<Loan>>) => response.data)
    .then((response: Response<Loan>) => response.data)
}

const createLoan = (Loan: Loan): Promise<Loan | undefined> => {
  return axios
    .put(LOAN_URL, Loan)
    .then((response: AxiosResponse<Response<Loan>>) => response.data)
    .then((response: Response<Loan>) => response.data)
}

const updateLoan = (Loan: Loan): Promise<Loan | undefined> => {
  return axios
    .post(`${LOAN_URL}/${Loan.id}`, Loan)
    .then((response: AxiosResponse<Response<Loan>>) => response.data)
    .then((response: Response<Loan>) => response.data)
}

const deleteLoan = (LoanId: ID): Promise<void> => {
  return axios.delete(`${LOAN_URL}/${LoanId}`).then(() => {})
}

const deleteSelectedLoans = (loanIds: Array<ID>): Promise<void> => {
  const requests = loanIds.map((id) => axios.delete(`${LOAN_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getLoans, deleteLoan, deleteSelectedLoans, getLoanById, createLoan, updateLoan}
