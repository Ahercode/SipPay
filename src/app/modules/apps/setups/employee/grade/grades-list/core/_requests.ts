import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Grade, GradesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const GRADE_URL = `${API_URL}/user`
const GET_GRADES_URL = `${API_URL}/users/query`

const getGrades = (query: string): Promise<GradesQueryResponse> => {
  return axios
    .get(`${GET_GRADES_URL}?${query}`)
    .then((d: AxiosResponse<GradesQueryResponse>) => d.data)
}

const getGradeById = (id: ID): Promise<Grade | undefined> => {
  return axios
    .get(`${GRADE_URL}/${id}`)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const createGrade = (grade: Grade): Promise<Grade | undefined> => {
  return axios
    .put(GRADE_URL, grade)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const updateGrade = (grade: Grade): Promise<Grade | undefined> => {
  return axios
    .post(`${GRADE_URL}/${grade.id}`, grade)
    .then((response: AxiosResponse<Response<Grade>>) => response.data)
    .then((response: Response<Grade>) => response.data)
}

const deleteGrade = (gradeId: ID): Promise<void> => {
  return axios.delete(`${GRADE_URL}/${gradeId}`).then(() => {})
}

const deleteSelectedGrades = (GradeIds: Array<ID>): Promise<void> => {
  const requests = GradeIds.map((id) => axios.delete(`${GRADE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getGrades, deleteGrade, deleteSelectedGrades, getGradeById, createGrade, updateGrade}
