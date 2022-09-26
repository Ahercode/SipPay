import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Tax, TaxsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TAX_URL = `${API_URL}/user`
const GET_TAXS_URL = `${API_URL}/users/query`

const getTaxs = (query: string): Promise<TaxsQueryResponse> => {
  return axios
    .get(`${GET_TAXS_URL}?${query}`)
    .then((d: AxiosResponse<TaxsQueryResponse>) => d.data)
}

const getTaxById = (id: ID): Promise<Tax | undefined> => {
  return axios
    .get(`${TAX_URL}/${id}`)
    .then((response: AxiosResponse<Response<Tax>>) => response.data)
    .then((response: Response<Tax>) => response.data)
}

const createTax = (tax: Tax): Promise<Tax | undefined> => {
  return axios
    .put(TAX_URL, tax)
    .then((response: AxiosResponse<Response<Tax>>) => response.data)
    .then((response: Response<Tax>) => response.data)
}

const updateTax = (tax: Tax): Promise<Tax | undefined> => {
  return axios
    .post(`${TAX_URL}/${tax.id}`, tax)
    .then((response: AxiosResponse<Response<Tax>>) => response.data)
    .then((response: Response<Tax>) => response.data)
}

const deleteTax = (taxId: ID): Promise<void> => {
  return axios.delete(`${TAX_URL}/${taxId}`).then(() => {})
}

const deleteSelectedTaxs = (taxIds: Array<ID>): Promise<void> => {
  const requests = taxIds.map((id) => axios.delete(`${TAX_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getTaxs, deleteTax, deleteSelectedTaxs, getTaxById, createTax, updateTax}
