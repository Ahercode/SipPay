import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Department, DepartmentsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const DEPARTMENT_URL = `${API_URL}/user`
const GET_DEPARTMENTS_URL = `${API_URL}/users/query`

const getDepartments = (query: string): Promise<DepartmentsQueryResponse> => {
  return axios
    .get(`${GET_DEPARTMENTS_URL}?${query}`)
    .then((d: AxiosResponse<DepartmentsQueryResponse>) => d.data)
}

const getDepartmentById = (id: ID): Promise<Department | undefined> => {
  return axios
    .get(`${DEPARTMENT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Department>>) => response.data)
    .then((response: Response<Department>) => response.data)
}

const createDepartment = (department: Department): Promise<Department | undefined> => {
  return axios
    .put(DEPARTMENT_URL, department)
    .then((response: AxiosResponse<Response<Department>>) => response.data)
    .then((response: Response<Department>) => response.data)
}

const updateDepartment = (department: Department): Promise<Department | undefined> => {
  return axios
    .post(`${DEPARTMENT_URL}/${department.id}`, department)
    .then((response: AxiosResponse<Response<Department>>) => response.data)
    .then((response: Response<Department>) => response.data)
}

const deleteDepartment = (departmentId: ID): Promise<void> => {
  return axios.delete(`${DEPARTMENT_URL}/${departmentId}`).then(() => {})
}

const deleteSelectedDepartments = (DepartmentIds: Array<ID>): Promise<void> => {
  const requests = DepartmentIds.map((id) => axios.delete(`${DEPARTMENT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getDepartments, deleteDepartment, deleteSelectedDepartments, getDepartmentById, createDepartment, updateDepartment}
