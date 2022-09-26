import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Company, CompanyQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const COMPANY_URL = `${API_URL}/user`
const GET_COMPANY_URL = `${API_URL}/users/query`

const getCompany = (query: string): Promise<CompanyQueryResponse> => {
  return axios
    .get(`${GET_COMPANY_URL}?${query}`)
    .then((d: AxiosResponse<CompanyQueryResponse>) => d.data)
}

const getCompanyById = (id: ID): Promise<Company | undefined> => {
  return axios
    .get(`${COMPANY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Company>>) => response.data)
    .then((response: Response<Company>) => response.data)
}

const createCompany = (Company: Company): Promise<Company | undefined> => {
  return axios
    .put(COMPANY_URL, Company)
    .then((response: AxiosResponse<Response<Company>>) => response.data)
    .then((response: Response<Company>) => response.data)
}

const updateCompany = (Company: Company): Promise<Company | undefined> => {
  return axios
    .post(`${COMPANY_URL}/${Company.id}`, Company)
    .then((response: AxiosResponse<Response<Company>>) => response.data)
    .then((response: Response<Company>) => response.data)
}

const deleteCompany = (CompanyId: ID): Promise<void> => {
  return axios.delete(`${COMPANY_URL}/${CompanyId}`).then(() => {})
}

const deleteSelectedCompany = (CompanyIds: Array<ID>): Promise<void> => {
  const requests = CompanyIds.map((id) => axios.delete(`${COMPANY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getCompany, deleteCompany, deleteSelectedCompany, getCompanyById, createCompany, updateCompany}
