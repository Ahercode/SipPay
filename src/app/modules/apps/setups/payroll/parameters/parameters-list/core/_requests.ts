import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Parameter, ParametersQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const PARAMETER_URL = `${API_URL}/user`
const GET_PARAMETERS_URL = `${API_URL}/users/query`

const getParameters = (query: string): Promise<ParametersQueryResponse> => {
  return axios
    .get(`${GET_PARAMETERS_URL}?${query}`)
    .then((d: AxiosResponse<ParametersQueryResponse>) => d.data)
}

const getParameterById = (id: ID): Promise<Parameter | undefined> => {
  return axios
    .get(`${PARAMETER_URL}/${id}`)
    .then((response: AxiosResponse<Response<Parameter>>) => response.data)
    .then((response: Response<Parameter>) => response.data)
}

const createParameter = (parameter: Parameter): Promise<Parameter | undefined> => {
  return axios
    .put(PARAMETER_URL, parameter)
    .then((response: AxiosResponse<Response<Parameter>>) => response.data)
    .then((response: Response<Parameter>) => response.data)
}

const updateParameter = (Parameter: Parameter): Promise<Parameter | undefined> => {
  return axios
    .post(`${PARAMETER_URL}/${Parameter.id}`, Parameter)
    .then((response: AxiosResponse<Response<Parameter>>) => response.data)
    .then((response: Response<Parameter>) => response.data)
}

const deleteParameter = (parameterId: ID): Promise<void> => {
  return axios.delete(`${PARAMETER_URL}/${parameterId}`).then(() => {})
}

const deleteSelectedParameters = (parameterIds: Array<ID>): Promise<void> => {
  const requests = parameterIds.map((id) => axios.delete(`${PARAMETER_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getParameters, deleteParameter, deleteSelectedParameters, getParameterById, createParameter, updateParameter}
