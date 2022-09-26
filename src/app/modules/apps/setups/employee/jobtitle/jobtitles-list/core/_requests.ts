import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Jobtitle, JobtitlesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const JOBTITLE_URL = `${API_URL}/user`
const GET_JOBTITLES_URL = `${API_URL}/users/query`

const getJobtitles = (query: string): Promise<JobtitlesQueryResponse> => {
  return axios
    .get(`${GET_JOBTITLES_URL}?${query}`)
    .then((d: AxiosResponse<JobtitlesQueryResponse>) => d.data)
}

const getJobtitleById = (id: ID): Promise<Jobtitle | undefined> => {
  return axios
    .get(`${JOBTITLE_URL}/${id}`)
    .then((response: AxiosResponse<Response<Jobtitle>>) => response.data)
    .then((response: Response<Jobtitle>) => response.data)
}

const createJobtitle = (jobtitle: Jobtitle): Promise<Jobtitle | undefined> => {
  return axios
    .put(JOBTITLE_URL, jobtitle)
    .then((response: AxiosResponse<Response<Jobtitle>>) => response.data)
    .then((response: Response<Jobtitle>) => response.data)
}

const updateJobtitle = (jobtitle: Jobtitle): Promise<Jobtitle | undefined> => {
  return axios
    .post(`${JOBTITLE_URL}/${jobtitle.id}`, jobtitle)
    .then((response: AxiosResponse<Response<Jobtitle>>) => response.data)
    .then((response: Response<Jobtitle>) => response.data)
}

const deleteJobtitle = (jobtitleId: ID): Promise<void> => {
  return axios.delete(`${JOBTITLE_URL}/${jobtitleId}`).then(() => {})
}

const deleteSelectedJobtitles = (jobtitleIds: Array<ID>): Promise<void> => {
  const requests = jobtitleIds.map((id) => axios.delete(`${JOBTITLE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getJobtitles, deleteJobtitle, deleteSelectedJobtitles, getJobtitleById, createJobtitle, updateJobtitle}
