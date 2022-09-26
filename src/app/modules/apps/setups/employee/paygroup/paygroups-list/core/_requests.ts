import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {PaygroupsQueryResponse, Paygroup} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const PAYGROUP_URL = `${API_URL}/user`
const GET_PAYGROUPS_URL = `${API_URL}/users/query`

const getPaygroups = (query: string): Promise<PaygroupsQueryResponse> => {
  return axios
    .get(`${GET_PAYGROUPS_URL}?${query}`)
    .then((d: AxiosResponse<PaygroupsQueryResponse>) => d.data)
}

const getPaygroupById = (id: ID): Promise<Paygroup | undefined> => {
  return axios
    .get(`${PAYGROUP_URL}/${id}`)
    .then((response: AxiosResponse<Response<Paygroup>>) => response.data)
    .then((response: Response<Paygroup>) => response.data)
}

const createPaygroup = (paygroup: Paygroup): Promise<Paygroup | undefined> => {
  return axios
    .put(PAYGROUP_URL, paygroup)
    .then((response: AxiosResponse<Response<Paygroup>>) => response.data)
    .then((response: Response<Paygroup>) => response.data)
}

const updatePaygroup = (paygroup: Paygroup): Promise<Paygroup | undefined> => {
  return axios
    .post(`${PAYGROUP_URL}/${paygroup.id}`, paygroup)
    .then((response: AxiosResponse<Response<Paygroup>>) => response.data)
    .then((response: Response<Paygroup>) => response.data)
}

const deletePaygroup = (paygroupId: ID): Promise<void> => {
  return axios.delete(`${PAYGROUP_URL}/${paygroupId}`).then(() => {})
}

const deleteSelectedPaygroups = (paygroupIds: Array<ID>): Promise<void> => {
  const requests = paygroupIds.map((id) => axios.delete(`${PAYGROUP_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getPaygroups, deletePaygroup, deleteSelectedPaygroups, getPaygroupById, createPaygroup, updatePaygroup}
