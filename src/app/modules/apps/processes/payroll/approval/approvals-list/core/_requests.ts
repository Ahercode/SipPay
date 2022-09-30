import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Approval, ApprovalsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const APPROVAL_URL = `${API_URL}/user`
const GET_APPROVALS_URL = `${API_URL}/users/query`

const getApprovals = (query: string): Promise<ApprovalsQueryResponse> => {
  return axios
    .get(`${GET_APPROVALS_URL}?${query}`)
    .then((d: AxiosResponse<ApprovalsQueryResponse>) => d.data)
}

const getApprovalById = (id: ID): Promise<Approval | undefined> => {
  return axios
    .get(`${APPROVAL_URL}/${id}`)
    .then((response: AxiosResponse<Response<Approval>>) => response.data)
    .then((response: Response<Approval>) => response.data)
}

const createApproval = (approval: Approval): Promise<Approval | undefined> => {
  return axios
    .put(APPROVAL_URL, approval)
    .then((response: AxiosResponse<Response<Approval>>) => response.data)
    .then((response: Response<Approval>) => response.data)
}

const updateApproval = (approval: Approval): Promise<Approval | undefined> => {
  return axios
    .post(`${APPROVAL_URL}/${approval.id}`, approval)
    .then((response: AxiosResponse<Response<Approval>>) => response.data)
    .then((response: Response<Approval>) => response.data)
}

const deleteApproval = (approvalId: ID): Promise<void> => {
  return axios.delete(`${APPROVAL_URL}/${approvalId}`).then(() => {})
}

const deleteSelectedApprovals = (approvalIds: Array<ID>): Promise<void> => {
  const requests = approvalIds.map((id) => axios.delete(`${APPROVAL_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getApprovals, deleteApproval, deleteSelectedApprovals, getApprovalById, createApproval, updateApproval}
