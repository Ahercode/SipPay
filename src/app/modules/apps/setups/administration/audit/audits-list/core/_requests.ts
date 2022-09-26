import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Audit, AuditsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const AUDIT_URL = `${API_URL}/user`
const GET_AUDITS_URL = `${API_URL}/users/query`

const getAudits = (query: string): Promise<AuditsQueryResponse> => {
  return axios
    .get(`${GET_AUDITS_URL}?${query}`)
    .then((d: AxiosResponse<AuditsQueryResponse>) => d.data)
}

const getAuditById = (id: ID): Promise<Audit | undefined> => {
  return axios
    .get(`${AUDIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Audit>>) => response.data)
    .then((response: Response<Audit>) => response.data)
}

const createAudit = (audit: Audit): Promise<Audit | undefined> => {
  return axios
    .put(AUDIT_URL, audit)
    .then((response: AxiosResponse<Response<Audit>>) => response.data)
    .then((response: Response<Audit>) => response.data)
}

const updateAudit = (audit: Audit): Promise<Audit | undefined> => {
  return axios
    .post(`${AUDIT_URL}/${audit.id}`, audit)
    .then((response: AxiosResponse<Response<Audit>>) => response.data)
    .then((response: Response<Audit>) => response.data)
}

const deleteAudit = (auditId: ID): Promise<void> => {
  return axios.delete(`${AUDIT_URL}/${auditId}`).then(() => {})
}

const deleteSelectedAudits = (auditIds: Array<ID>): Promise<void> => {
  const requests = auditIds.map((id) => axios.delete(`${AUDIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getAudits, deleteAudit, deleteSelectedAudits, getAuditById, createAudit, updateAudit}
