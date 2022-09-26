import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Training, TrainingsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const TRAINING_URL = `${API_URL}/user`
const GET_TRAININGS_URL = `${API_URL}/users/query`

const getTrainings = (query: string): Promise<TrainingsQueryResponse> => {
  return axios
    .get(`${GET_TRAININGS_URL}?${query}`)
    .then((d: AxiosResponse<TrainingsQueryResponse>) => d.data)
}

const getTrainingById = (id: ID): Promise<Training | undefined> => {
  return axios
    .get(`${TRAINING_URL}/${id}`)
    .then((response: AxiosResponse<Response<Training>>) => response.data)
    .then((response: Response<Training>) => response.data)
}

const createTraining = (training: Training): Promise<Training | undefined> => {
  return axios
    .put(TRAINING_URL, training)
    .then((response: AxiosResponse<Response<Training>>) => response.data)
    .then((response: Response<Training>) => response.data)
}

const updateTraining = (training: Training): Promise<Training | undefined> => {
  return axios
    .post(`${TRAINING_URL}/${training.id}`, training)
    .then((response: AxiosResponse<Response<Training>>) => response.data)
    .then((response: Response<Training>) => response.data)
}

const deleteTraining = (trainingId: ID): Promise<void> => {
  return axios.delete(`${TRAINING_URL}/${trainingId}`).then(() => {})
}

const deleteSelectedTrainings = (trainingIds: Array<ID>): Promise<void> => {
  const requests = trainingIds.map((id) => axios.delete(`${TRAINING_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getTrainings, deleteTraining, deleteSelectedTrainings, getTrainingById, createTraining, updateTraining}
