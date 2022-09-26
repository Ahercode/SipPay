import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {SavingScheme, SavingSchemesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const SAVINGSCHEME_URL = `${API_URL}/user`
const GET_SAVINGSCHEMES_URL = `${API_URL}/users/query`

const getSavingSchemes = (query: string): Promise<SavingSchemesQueryResponse> => {
  return axios
    .get(`${GET_SAVINGSCHEMES_URL}?${query}`)
    .then((d: AxiosResponse<SavingSchemesQueryResponse>) => d.data)
}

const getSavingSchemeById = (id: ID): Promise<SavingScheme | undefined> => {
  return axios
    .get(`${SAVINGSCHEME_URL}/${id}`)
    .then((response: AxiosResponse<Response<SavingScheme>>) => response.data)
    .then((response: Response<SavingScheme>) => response.data)
}

const createSavingScheme = (savingScheme: SavingScheme): Promise<SavingScheme | undefined> => {
  return axios
    .put(SAVINGSCHEME_URL, savingScheme)
    .then((response: AxiosResponse<Response<SavingScheme>>) => response.data)
    .then((response: Response<SavingScheme>) => response.data)
}

const updateSavingScheme = (savingScheme: SavingScheme): Promise<SavingScheme | undefined> => {
  return axios
    .post(`${SAVINGSCHEME_URL}/${savingScheme.id}`, savingScheme)
    .then((response: AxiosResponse<Response<SavingScheme>>) => response.data)
    .then((response: Response<SavingScheme>) => response.data)
}

const deleteSavingScheme = (savingSchemeId: ID): Promise<void> => {
  return axios.delete(`${SAVINGSCHEME_URL}/${savingSchemeId}`).then(() => {})
}

const deleteSelectedSavingSchemes = (savingSchemeIds: Array<ID>): Promise<void> => {
  const requests = savingSchemeIds.map((id) => axios.delete(`${SAVINGSCHEME_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getSavingSchemes, deleteSavingScheme, deleteSelectedSavingSchemes, getSavingSchemeById, createSavingScheme, updateSavingScheme}
