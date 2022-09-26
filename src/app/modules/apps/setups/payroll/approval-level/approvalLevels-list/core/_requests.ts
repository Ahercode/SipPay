import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {ApprovalLevel, ApprovalLevelsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const APPROVALLEVEL_URL = `${API_URL}/user`
const GET_APPROVALLEVELS_URL = `${API_URL}/users/query`

const getApprovalLevels = (query: string): Promise<ApprovalLevelsQueryResponse> => {
  return axios
    .get(`${GET_APPROVALLEVELS_URL}?${query}`)
    .then((d: AxiosResponse<ApprovalLevelsQueryResponse>) => d.data)
}

const getApprovalLevelById = (id: ID): Promise<ApprovalLevel | undefined> => {
  return axios
    .get(`${APPROVALLEVEL_URL}/${id}`)
    .then((response: AxiosResponse<Response<ApprovalLevel>>) => response.data)
    .then((response: Response<ApprovalLevel>) => response.data)
}

const createApprovalLevel = (approvalLevel: ApprovalLevel): Promise<ApprovalLevel | undefined> => {
  return axios
    .put(APPROVALLEVEL_URL, approvalLevel)
    .then((response: AxiosResponse<Response<ApprovalLevel>>) => response.data)
    .then((response: Response<ApprovalLevel>) => response.data)
}

const updateApprovalLevel = (approvalLevel: ApprovalLevel): Promise<ApprovalLevel | undefined> => {
  return axios
    .post(`${APPROVALLEVEL_URL}/${approvalLevel.id}`, approvalLevel)
    .then((response: AxiosResponse<Response<ApprovalLevel>>) => response.data)
    .then((response: Response<ApprovalLevel>) => response.data)
}

const deleteApprovalLevel = (approvalLevelId: ID): Promise<void> => {
  return axios.delete(`${APPROVALLEVEL_URL}/${approvalLevelId}`).then(() => {})
}

const deleteSelectedApprovalLevels = (approvalLevelIds: Array<ID>): Promise<void> => {
  const requests = approvalLevelIds.map((id) => axios.delete(`${APPROVALLEVEL_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getApprovalLevels, deleteApprovalLevel, deleteSelectedApprovalLevels, getApprovalLevelById, createApprovalLevel, updateApprovalLevel}
