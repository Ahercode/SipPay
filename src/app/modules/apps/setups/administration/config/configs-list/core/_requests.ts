import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Config, ConfigsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const CONFIG_URL = `${API_URL}/user`
const GET_CONFIGS_URL = `${API_URL}/users/query`

const getConfigs = (query: string): Promise<ConfigsQueryResponse> => {
  return axios
    .get(`${GET_CONFIGS_URL}?${query}`)
    .then((d: AxiosResponse<ConfigsQueryResponse>) => d.data)
}

const getConfigById = (id: ID): Promise<Config | undefined> => {
  return axios
    .get(`${CONFIG_URL}/${id}`)
    .then((response: AxiosResponse<Response<Config>>) => response.data)
    .then((response: Response<Config>) => response.data)
}

const createConfig = (config: Config): Promise<Config | undefined> => {
  return axios
    .put(CONFIG_URL, config)
    .then((response: AxiosResponse<Response<Config>>) => response.data)
    .then((response: Response<Config>) => response.data)
}

const updateConfig = (config: Config): Promise<Config | undefined> => {
  return axios
    .post(`${CONFIG_URL}/${config.id}`, config)
    .then((response: AxiosResponse<Response<Config>>) => response.data)
    .then((response: Response<Config>) => response.data)
}

const deleteConfig = (configId: ID): Promise<void> => {
  return axios.delete(`${CONFIG_URL}/${configId}`).then(() => {})
}

const deleteSelectedConfigs = (configIds: Array<ID>): Promise<void> => {
  const requests = configIds.map((id) => axios.delete(`${CONFIG_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getConfigs, deleteConfig, deleteSelectedConfigs, getConfigById, createConfig, updateConfig}
