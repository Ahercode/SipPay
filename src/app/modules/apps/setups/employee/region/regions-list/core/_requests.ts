import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Region, RegionsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const REGION_URL = `${API_URL}/user`
const GET_REGIONS_URL = `${API_URL}/users/query`

const getRegions = (query: string): Promise<RegionsQueryResponse> => {
  return axios
    .get(`${GET_REGIONS_URL}?${query}`)
    .then((d: AxiosResponse<RegionsQueryResponse>) => d.data)
}

const getRegionById = (id: ID): Promise<Region | undefined> => {
  return axios
    .get(`${REGION_URL}/${id}`)
    .then((response: AxiosResponse<Response<Region>>) => response.data)
    .then((response: Response<Region>) => response.data)
}

const createRegion = (region: Region): Promise<Region | undefined> => {
  return axios
    .put(REGION_URL, region)
    .then((response: AxiosResponse<Response<Region>>) => response.data)
    .then((response: Response<Region>) => response.data)
}

const updateRegion = (region: Region): Promise<Region | undefined> => {
  return axios
    .post(`${REGION_URL}/${region.id}`, region)
    .then((response: AxiosResponse<Response<Region>>) => response.data)
    .then((response: Response<Region>) => response.data)
}

const deleteRegion = (regionId: ID): Promise<void> => {
  return axios.delete(`${REGION_URL}/${regionId}`).then(() => {})
}

const deleteSelectedRegions = (regionIds: Array<ID>): Promise<void> => {
  const requests = regionIds.map((id) => axios.delete(`${REGION_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getRegions, deleteRegion, deleteSelectedRegions, getRegionById, createRegion, updateRegion}
