import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {DisciplinaryAction, DisciplinaryActionsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DISCIPLINARYACTION_URL = `${API_URL}/user`
const GET_DISCIPINARYACTIONS_URL = `${API_URL}/users/query`

const getDisciplinaryActions = (query: string): Promise<DisciplinaryActionsQueryResponse> => {
  return axios
    .get(`${GET_DISCIPINARYACTIONS_URL}?${query}`)
    .then((d: AxiosResponse<DisciplinaryActionsQueryResponse>) => d.data)
}

const getDisciplinaryActionById = (id: ID): Promise<DisciplinaryAction | undefined> => {
  return axios
    .get(`${DISCIPLINARYACTION_URL}/${id}`)
    .then((response: AxiosResponse<Response<DisciplinaryAction>>) => response.data)
    .then((response: Response<DisciplinaryAction>) => response.data)
}

const createDisciplinaryAction = (disciplinaryAction: DisciplinaryAction): Promise<DisciplinaryAction | undefined> => {
  return axios
    .put(DISCIPLINARYACTION_URL, disciplinaryAction)
    .then((response: AxiosResponse<Response<DisciplinaryAction>>) => response.data)
    .then((response: Response<DisciplinaryAction>) => response.data)
}

const updateDisciplinaryAction = (disciplinaryAction: DisciplinaryAction): Promise<DisciplinaryAction | undefined> => {
  return axios
    .post(`${DISCIPLINARYACTION_URL}/${disciplinaryAction.id}`, disciplinaryAction)
    .then((response: AxiosResponse<Response<DisciplinaryAction>>) => response.data)
    .then((response: Response<DisciplinaryAction>) => response.data)
}

const deleteDisciplinaryAction = (disciplinaryActionId: ID): Promise<void> => {
  return axios.delete(`${DISCIPLINARYACTION_URL}/${disciplinaryActionId}`).then(() => {})
}

const deleteSelectedDisciplinaryActions = (disciplinaryActionIds: Array<ID>): Promise<void> => {
  const requests = disciplinaryActionIds.map((id) => axios.delete(`${DISCIPLINARYACTION_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDisciplinaryActions, deleteDisciplinaryAction, deleteSelectedDisciplinaryActions, getDisciplinaryActionById, createDisciplinaryAction, updateDisciplinaryAction}
