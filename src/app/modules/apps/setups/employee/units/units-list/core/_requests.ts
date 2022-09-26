import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Unit, UnitsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL 
const UNIT_URL = `${API_URL}/user`
const GET_UNITS_URL = `${API_URL}/users/query`

const getUnits = (query: string): Promise<UnitsQueryResponse> => {
  return axios
    .get(`${GET_UNITS_URL}?${query}`)
    .then((d: AxiosResponse<UnitsQueryResponse>) => d.data)
}

const getUnitById = (id: ID): Promise<Unit | undefined> => {
  return axios
    .get(`${UNIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Unit>>) => response.data)
    .then((response: Response<Unit>) => response.data)
}

const createUnit = (unit: Unit): Promise<Unit | undefined> => {
  return axios
    .put(UNIT_URL, unit)
    .then((response: AxiosResponse<Response<Unit>>) => response.data)
    .then((response: Response<Unit>) => response.data)
}

const updateUnit = (unit: Unit): Promise<Unit | undefined> => {
  return axios
    .post(`${UNIT_URL}/${unit.id}`, unit)
    .then((response: AxiosResponse<Response<Unit>>) => response.data)
    .then((response: Response<Unit>) => response.data)
}

const deleteUnit = (unitId: ID): Promise<void> => {
  return axios.delete(`${UNIT_URL}/${unitId}`).then(() => {})
}

const deleteSelectedUnits = (unitIds: Array<ID>): Promise<void> => {
  const requests = unitIds.map((id) => axios.delete(`${UNIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getUnits, deleteUnit, deleteSelectedUnits, getUnitById, createUnit, updateUnit}
