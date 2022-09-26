import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Division, DivisionsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DIVISION_URL = `${API_URL}/user`
const GET_DIVISION_URL = `${API_URL}/users/query`

const getDivisions = (query: string): Promise<DivisionsQueryResponse> => {
  return axios
    .get(`${GET_DIVISION_URL}?${query}`)
    .then((d: AxiosResponse<DivisionsQueryResponse>) => d.data)
}

const getDivisionById = (id: ID): Promise<Division | undefined> => {
  return axios
    .get(`${DIVISION_URL}/${id}`)
    .then((response: AxiosResponse<Response<Division>>) => response.data)
    .then((response: Response<Division>) => response.data)
}

const createDivision = (division: Division): Promise<Division | undefined> => {
  return axios
    .put(DIVISION_URL, division)
    .then((response: AxiosResponse<Response<Division>>) => response.data)
    .then((response: Response<Division>) => response.data)
}

const updateDivision = (division: Division): Promise<Division | undefined> => {
  return axios
    .post(`${DIVISION_URL}/${division.id}`, division)
    .then((response: AxiosResponse<Response<Division>>) => response.data)
    .then((response: Response<Division>) => response.data)
}

const deleteDivision = (divisionId: ID): Promise<void> => {
  return axios.delete(`${DIVISION_URL}/${divisionId}`).then(() => {})
}

const deleteSelectedDivisions = (divisionIds: Array<ID>): Promise<void> => {
  const requests = divisionIds.map((id) => axios.delete(`${DIVISION_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDivisions, deleteDivision, deleteSelectedDivisions, getDivisionById, createDivision, updateDivision}
