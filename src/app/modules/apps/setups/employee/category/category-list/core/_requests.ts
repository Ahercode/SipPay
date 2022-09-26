import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Category, CategoryQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const CATEGORY_URL = `${API_URL}/user`
const GET_CATEGORY_URL = `${API_URL}/users/query`

const getCategory = (query: string): Promise<CategoryQueryResponse> => {
  return axios
    .get(`${GET_CATEGORY_URL}?${query}`)
    .then((d: AxiosResponse<CategoryQueryResponse>) => d.data)
}

const getCategoryById = (id: ID): Promise<Category | undefined> => {
  return axios
    .get(`${CATEGORY_URL}/${id}`)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data)
}

const createCategory = (category: Category): Promise<Category | undefined> => {
  return axios
    .put(CATEGORY_URL, category)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data)
}

const updateCategory = (category: Category): Promise<Category | undefined> => {
  return axios
    .post(`${CATEGORY_URL}/${category.id}`, category)
    .then((response: AxiosResponse<Response<Category>>) => response.data)
    .then((response: Response<Category>) => response.data)
}

const deleteCategory = (bankId: ID): Promise<void> => {
  return axios.delete(`${CATEGORY_URL}/${bankId}`).then(() => {})
}

const deleteSelectedCategory = (bankIds: Array<ID>): Promise<void> => {
  const requests = bankIds.map((id) => axios.delete(`${CATEGORY_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getCategory, deleteCategory, deleteSelectedCategory, getCategoryById, createCategory, updateCategory}
