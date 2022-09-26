import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Deduction, DeductionsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DEDUCTION_URL = `${API_URL}/user`
const GET_DEDUCTIONS_URL = `${API_URL}/users/query`

const getDeductions = (query: string): Promise<DeductionsQueryResponse> => {
  return axios
    .get(`${GET_DEDUCTIONS_URL}?${query}`)
    .then((d: AxiosResponse<DeductionsQueryResponse>) => d.data)
}

const getDeductionById = (id: ID): Promise<Deduction | undefined> => {
  return axios
    .get(`${DEDUCTION_URL}/${id}`)
    .then((response: AxiosResponse<Response<Deduction>>) => response.data)
    .then((response: Response<Deduction>) => response.data)
}

const createDeduction = (deduction: Deduction): Promise<Deduction | undefined> => {
  return axios
    .put(DEDUCTION_URL, deduction)
    .then((response: AxiosResponse<Response<Deduction>>) => response.data)
    .then((response: Response<Deduction>) => response.data)
}

const updateDeduction = (deduction: Deduction): Promise<Deduction | undefined> => {
  return axios
    .post(`${DEDUCTION_URL}/${deduction.id}`, deduction)
    .then((response: AxiosResponse<Response<Deduction>>) => response.data)
    .then((response: Response<Deduction>) => response.data)
}

const deleteDeduction = (deductionId: ID): Promise<void> => {
  return axios.delete(`${DEDUCTION_URL}/${deductionId}`).then(() => {})
}

const deleteSelectedDeductions = (deductionIds: Array<ID>): Promise<void> => {
  const requests = deductionIds.map((id) => axios.delete(`${DEDUCTION_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDeductions, deleteDeduction, deleteSelectedDeductions, getDeductionById, createDeduction, updateDeduction}
