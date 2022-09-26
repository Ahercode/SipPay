import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Notch, NotchsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const NOTCH_URL = `${API_URL}/user`
const GET_NOTCHS_URL = `${API_URL}/users/query`

const getNotchs = (query: string): Promise<NotchsQueryResponse> => {
  return axios
    .get(`${GET_NOTCHS_URL}?${query}`)
    .then((d: AxiosResponse<NotchsQueryResponse>) => d.data)
}

const getNotchById = (id: ID): Promise<Notch | undefined> => {
  return axios
    .get(`${NOTCH_URL}/${id}`)
    .then((response: AxiosResponse<Response<Notch>>) => response.data)
    .then((response: Response<Notch>) => response.data)
}

const createNotch = (notch: Notch): Promise<Notch | undefined> => {
  return axios
    .put(NOTCH_URL, notch)
    .then((response: AxiosResponse<Response<Notch>>) => response.data)
    .then((response: Response<Notch>) => response.data)
}

const updateNotch = (notch: Notch): Promise<Notch | undefined> => {
  return axios
    .post(`${NOTCH_URL}/${notch.id}`, notch)
    .then((response: AxiosResponse<Response<Notch>>) => response.data)
    .then((response: Response<Notch>) => response.data)
}

const deleteNotch = (notchId: ID): Promise<void> => {
  return axios.delete(`${NOTCH_URL}/${notchId}`).then(() => {})
}

const deleteSelectedNotchs = (notchIds: Array<ID>): Promise<void> => {
  const requests = notchIds.map((id) => axios.delete(`${NOTCH_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getNotchs, deleteNotch, deleteSelectedNotchs, getNotchById, createNotch, updateNotch}
