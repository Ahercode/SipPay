import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Leave, LeavesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const Leave_URL = `${API_URL}/user`
const GET_LeaveS_URL = `${API_URL}/users/query`

const getLeaves = (query: string): Promise<LeavesQueryResponse> => {
  return axios
    .get(`${GET_LeaveS_URL}?${query}`)
    .then((d: AxiosResponse<LeavesQueryResponse>) => d.data)
}

const getLeaveById = (id: ID): Promise<Leave | undefined> => {
  return axios
    .get(`${Leave_URL}/${id}`)
    .then((response: AxiosResponse<Response<Leave>>) => response.data)
    .then((response: Response<Leave>) => response.data)
}

const createLeave = (leave: Leave): Promise<Leave | undefined> => {
  return axios
    .put(Leave_URL, leave)
    .then((response: AxiosResponse<Response<Leave>>) => response.data)
    .then((response: Response<Leave>) => response.data)
}

const updateLeave = (leave: Leave): Promise<Leave | undefined> => {
  return axios
    .post(`${Leave_URL}/${leave.id}`, leave)
    .then((response: AxiosResponse<Response<Leave>>) => response.data)
    .then((response: Response<Leave>) => response.data)
}

const deleteLeave = (leaveId: ID): Promise<void> => {
  return axios.delete(`${Leave_URL}/${leaveId}`).then(() => {})
}

const deleteSelectedLeaves = (leaveIds: Array<ID>): Promise<void> => {
  const requests = leaveIds.map((id) => axios.delete(`${Leave_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getLeaves, deleteLeave, deleteSelectedLeaves, getLeaveById, createLeave, updateLeave}
