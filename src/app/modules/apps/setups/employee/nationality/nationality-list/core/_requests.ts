import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Nationality, NationalityQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const NATIONALITY_URL = `${API_URL}/user`
const GET_NATIONALITY_URL = `${API_URL}/users/query`

const getNationality = (query: string): Promise<NationalityQueryResponse> => {
  return axios
    .get(`${GET_NATIONALITY_URL}?${query}`)
    .then((d: AxiosResponse<NationalityQueryResponse>) => d.data)
}

const getNationalityById = (id: ID): Promise<Nationality | undefined> => {
  return axios
    .get(`${NATIONALITY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Nationality>>) => response.data)
    .then((response: Response<Nationality>) => response.data)
}

const createNationality = (nationality: Nationality): Promise<Nationality | undefined> => {
  return axios
    .put(NATIONALITY_URL, nationality)
    .then((response: AxiosResponse<Response<Nationality>>) => response.data)
    .then((response: Response<Nationality>) => response.data)
}

const updateNationality = (nationality: Nationality): Promise<Nationality | undefined> => {
  return axios
    .post(`${NATIONALITY_URL}/${nationality.id}`, nationality)
    .then((response: AxiosResponse<Response<Nationality>>) => response.data)
    .then((response: Response<Nationality>) => response.data)
}

const deleteNationality = (nationalityId: ID): Promise<void> => {
  return axios.delete(`${NATIONALITY_URL}/${nationalityId}`).then(() => {})
}

const deleteSelectedNationality = (nationalityIds: Array<ID>): Promise<void> => {
  const requests = nationalityIds.map((id) => axios.delete(`${NATIONALITY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getNationality, deleteNationality, deleteSelectedNationality, getNationalityById, createNationality, updateNationality}
