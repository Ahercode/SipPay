import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../_metronic/helpers'
import {Bank, BanksQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const BANK_URL = `${API_URL}/user`
const GET_BANKS_URL = `${API_URL}/users/query`

const getBanks = (query: string): Promise<BanksQueryResponse> => {
  return axios
    .get(`${GET_BANKS_URL}?${query}`)
    .then((d: AxiosResponse<BanksQueryResponse>) => d.data)
}

const getBankById = (id: ID): Promise<Bank | undefined> => {
  return axios
    .get(`${BANK_URL}/${id}`)
    .then((response: AxiosResponse<Response<Bank>>) => response.data)
    .then((response: Response<Bank>) => response.data)
}

const createBank = (bank: Bank): Promise<Bank | undefined> => {
  return axios
    .put(BANK_URL, bank)
    .then((response: AxiosResponse<Response<Bank>>) => response.data)
    .then((response: Response<Bank>) => response.data)
}

const updateBank = (bank: Bank): Promise<Bank | undefined> => {
  return axios
    .post(`${BANK_URL}/${bank.id}`, bank)
    .then((response: AxiosResponse<Response<Bank>>) => response.data)
    .then((response: Response<Bank>) => response.data)
}

const deleteBank = (bankId: ID): Promise<void> => {
  return axios.delete(`${BANK_URL}/${bankId}`).then(() => {})
}

const deleteSelectedBanks = (bankIds: Array<ID>): Promise<void> => {
  const requests = bankIds.map((id) => axios.delete(`${BANK_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getBanks, deleteBank, deleteSelectedBanks, getBankById, createBank, updateBank}
