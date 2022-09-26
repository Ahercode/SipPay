import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Period, PeriodsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const PERIOD_URL = `${API_URL}/user`
const GET_PERIODS_URL = `${API_URL}/users/query`

const getPeriods = (query: string): Promise<PeriodsQueryResponse> => {
  return axios
    .get(`${GET_PERIODS_URL}?${query}`)
    .then((d: AxiosResponse<PeriodsQueryResponse>) => d.data)
}

const getPeriodById = (id: ID): Promise<Period | undefined> => {
  return axios
    .get(`${PERIOD_URL}/${id}`)
    .then((response: AxiosResponse<Response<Period>>) => response.data)
    .then((response: Response<Period>) => response.data)
}

const createPeriod = (period: Period): Promise<Period | undefined> => {
  return axios
    .put(PERIOD_URL, period)
    .then((response: AxiosResponse<Response<Period>>) => response.data)
    .then((response: Response<Period>) => response.data)
}

const updatePeriod = (period: Period): Promise<Period | undefined> => {
  return axios
    .post(`${PERIOD_URL}/${period.id}`, period)
    .then((response: AxiosResponse<Response<Period>>) => response.data)
    .then((response: Response<Period>) => response.data)
}

const deletePeriod = (periodId: ID): Promise<void> => {
  return axios.delete(`${PERIOD_URL}/${periodId}`).then(() => {})
}

const deleteSelectedPeriods = (periodIds: Array<ID>): Promise<void> => {
  const requests = periodIds.map((id) => axios.delete(`${PERIOD_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getPeriods, deletePeriod, deleteSelectedPeriods, getPeriodById, createPeriod, updatePeriod}
