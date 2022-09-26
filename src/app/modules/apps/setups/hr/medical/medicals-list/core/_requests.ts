import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Medical, MedicalsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const MEDICALS_URL = `${API_URL}/user`
const GET_MEDICALS_URL = `${API_URL}/users/query`

const getMedicals = (query: string): Promise<MedicalsQueryResponse> => {
  return axios
    .get(`${GET_MEDICALS_URL}?${query}`)
    .then((d: AxiosResponse<MedicalsQueryResponse>) => d.data)
}

const getMedicalById = (id: ID): Promise<Medical | undefined> => {
  return axios
    .get(`${MEDICALS_URL}/${id}`)
    .then((response: AxiosResponse<Response<Medical>>) => response.data)
    .then((response: Response<Medical>) => response.data)
}

const createMedical = (medical: Medical): Promise<Medical | undefined> => {
  return axios
    .put(MEDICALS_URL, medical)
    .then((response: AxiosResponse<Response<Medical>>) => response.data)
    .then((response: Response<Medical>) => response.data)
}

const updateMedical = (medical: Medical): Promise<Medical | undefined> => {
  return axios
    .post(`${MEDICALS_URL}/${medical.id}`, medical)
    .then((response: AxiosResponse<Response<Medical>>) => response.data)
    .then((response: Response<Medical>) => response.data)
}

const deleteMedical = (medicalId: ID): Promise<void> => {
  return axios.delete(`${MEDICALS_URL}/${medicalId}`).then(() => {})
}

const deleteSelectedMedicals = (medicalIds: Array<ID>): Promise<void> => {
  const requests = medicalIds.map((id) => axios.delete(`${MEDICALS_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getMedicals, deleteMedical, deleteSelectedMedicals, getMedicalById, createMedical, updateMedical}
