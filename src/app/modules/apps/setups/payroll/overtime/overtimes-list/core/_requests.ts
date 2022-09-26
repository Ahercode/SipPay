import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Overtime, OvertimesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const OVERTIME_URL = `${API_URL}/user`
const GET_OVERTIMES_URL = `${API_URL}/users/query`

const getOvertimes = (query: string): Promise<OvertimesQueryResponse> => {
  return axios
    .get(`${GET_OVERTIMES_URL}?${query}`)
    .then((d: AxiosResponse<OvertimesQueryResponse>) => d.data)
}

const getOvertimeById = (id: ID): Promise<Overtime | undefined> => {
  return axios
    .get(`${OVERTIME_URL}/${id}`)
    .then((response: AxiosResponse<Response<Overtime>>) => response.data)
    .then((response: Response<Overtime>) => response.data)
}

const createOvertime = (overtime: Overtime): Promise<Overtime | undefined> => {
  return axios
    .put(OVERTIME_URL, overtime)
    .then((response: AxiosResponse<Response<Overtime>>) => response.data)
    .then((response: Response<Overtime>) => response.data)
}

const updateOvertime = (overtime: Overtime): Promise<Overtime | undefined> => {
  return axios
    .post(`${OVERTIME_URL}/${overtime.id}`, overtime)
    .then((response: AxiosResponse<Response<Overtime>>) => response.data)
    .then((response: Response<Overtime>) => response.data)
}

const deleteOvertime = (overtimeId: ID): Promise<void> => {
  return axios.delete(`${OVERTIME_URL}/${overtimeId}`).then(() => {})
}

const deleteSelectedOvertimes = (overtimeIds: Array<ID>): Promise<void> => {
  const requests = overtimeIds.map((id) => axios.delete(`${OVERTIME_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getOvertimes, deleteOvertime, deleteSelectedOvertimes, getOvertimeById, createOvertime, updateOvertime}
