import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Appraisal, AppraisalsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const APPRAISAL_URL = `${API_URL}/user`
const GET_APPRAISALS_URL = `${API_URL}/users/query`

const getAppraisals = (query: string): Promise<AppraisalsQueryResponse> => {
  return axios
    .get(`${GET_APPRAISALS_URL}?${query}`)
    .then((d: AxiosResponse<AppraisalsQueryResponse>) => d.data)
}

const getAppraisalById = (id: ID): Promise<Appraisal | undefined> => {
  return axios
    .get(`${APPRAISAL_URL}/${id}`)
    .then((response: AxiosResponse<Response<Appraisal>>) => response.data)
    .then((response: Response<Appraisal>) => response.data)
}

const createAppraisal = (appraisal: Appraisal): Promise<Appraisal | undefined> => {
  return axios
    .put(APPRAISAL_URL, appraisal)
    .then((response: AxiosResponse<Response<Appraisal>>) => response.data)
    .then((response: Response<Appraisal>) => response.data)
}

const updateAppraisal = (appraisal: Appraisal): Promise<Appraisal | undefined> => {
  return axios
    .post(`${APPRAISAL_URL}/${appraisal.id}`, appraisal)
    .then((response: AxiosResponse<Response<Appraisal>>) => response.data)
    .then((response: Response<Appraisal>) => response.data)
}

const deleteAppraisal = (appraisalId: ID): Promise<void> => {
  return axios.delete(`${APPRAISAL_URL}/${appraisalId}`).then(() => {})
}

const deleteSelectedAppraisals = (appraisalIds: Array<ID>): Promise<void> => {
  const requests = appraisalIds.map((id) => axios.delete(`${APPRAISAL_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getAppraisals, deleteAppraisal, deleteSelectedAppraisals, getAppraisalById, createAppraisal, updateAppraisal}
