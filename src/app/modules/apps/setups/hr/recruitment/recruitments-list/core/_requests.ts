import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Recruitment, RecruitmentsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const RECRUITMENT_URL = `${API_URL}/user`
const GET_RECRUITMENTS_URL = `${API_URL}/users/query`

const getRecruitments = (query: string): Promise<RecruitmentsQueryResponse> => {
  return axios
    .get(`${GET_RECRUITMENTS_URL}?${query}`)
    .then((d: AxiosResponse<RecruitmentsQueryResponse>) => d.data)
}

const getRecruitmentById = (id: ID): Promise<Recruitment | undefined> => {
  return axios
    .get(`${RECRUITMENT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Recruitment>>) => response.data)
    .then((response: Response<Recruitment>) => response.data)
}

const createRecruitment = (recruitment: Recruitment): Promise<Recruitment | undefined> => {
  return axios
    .put(RECRUITMENT_URL, recruitment)
    .then((response: AxiosResponse<Response<Recruitment>>) => response.data)
    .then((response: Response<Recruitment>) => response.data)
}

const updateRecruitment = (recruitment: Recruitment): Promise<Recruitment | undefined> => {
  return axios
    .post(`${RECRUITMENT_URL}/${recruitment.id}`, recruitment)
    .then((response: AxiosResponse<Response<Recruitment>>) => response.data)
    .then((response: Response<Recruitment>) => response.data)
}

const deleteRecruitment = (recruitmentId: ID): Promise<void> => {
  return axios.delete(`${RECRUITMENT_URL}/${recruitmentId}`).then(() => {})
}

const deleteSelectedRecruitments = (recruitmentIds: Array<ID>): Promise<void> => {
  const requests = recruitmentIds.map((id) => axios.delete(`${RECRUITMENT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getRecruitments, deleteRecruitment, deleteSelectedRecruitments, getRecruitmentById, createRecruitment, updateRecruitment}
