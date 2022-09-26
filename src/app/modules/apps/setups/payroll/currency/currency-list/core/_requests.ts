import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Currency, CurrencysQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const CURRENCY_URL = `${API_URL}/user`
const GET_CURRENCYS_URL = `${API_URL}/users/query`

const getCurrency = (query: string): Promise<CurrencysQueryResponse> => {
  return axios
    .get(`${GET_CURRENCYS_URL}?${query}`)
    .then((d: AxiosResponse<CurrencysQueryResponse>) => d.data)
}

const getCurrencyById = (id: ID): Promise<Currency | undefined> => {
  return axios
    .get(`${CURRENCY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Currency>>) => response.data)
    .then((response: Response<Currency>) => response.data)
}

const createCurrency = (currency: Currency): Promise<Currency | undefined> => {
  return axios
    .put(CURRENCY_URL, currency)
    .then((response: AxiosResponse<Response<Currency>>) => response.data)
    .then((response: Response<Currency>) => response.data)
}

const updateCurrency = (currency: Currency): Promise<Currency | undefined> => {
  return axios
    .post(`${CURRENCY_URL}/${currency.id}`, currency)
    .then((response: AxiosResponse<Response<Currency>>) => response.data)
    .then((response: Response<Currency>) => response.data)
}

const deleteCurrency = (currencyId: ID): Promise<void> => {
  return axios.delete(`${CURRENCY_URL}/${currencyId}`).then(() => {})
}

const deleteSelectedCurrency = (currencyIds: Array<ID>): Promise<void> => {
  const requests = currencyIds.map((id) => axios.delete(`${CURRENCY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getCurrency, deleteCurrency, deleteSelectedCurrency, getCurrencyById, createCurrency, updateCurrency}
