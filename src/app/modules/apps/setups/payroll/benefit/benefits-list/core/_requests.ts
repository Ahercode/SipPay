import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {Benefit, BenefitsQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const BENEFIT_URL = `${API_URL}/user`
const GET_BENEFITS_URL = `${API_URL}/users/query`

const getBenefits = (query: string): Promise<BenefitsQueryResponse> => {
  return axios
    .get(`${GET_BENEFITS_URL}?${query}`)
    .then((d: AxiosResponse<BenefitsQueryResponse>) => d.data)
}

const getBenefitById = (id: ID): Promise<Benefit | undefined> => {
  return axios
    .get(`${BENEFIT_URL}/${id}`)
    .then((response: AxiosResponse<Response<Benefit>>) => response.data)
    .then((response: Response<Benefit>) => response.data)
}

const createBenefit = (benefit: Benefit): Promise<Benefit | undefined> => {
  return axios
    .put(BENEFIT_URL, benefit)
    .then((response: AxiosResponse<Response<Benefit>>) => response.data)
    .then((response: Response<Benefit>) => response.data)
}

const updateBenefit = (benefit: Benefit): Promise<Benefit | undefined> => {
  return axios
    .post(`${BENEFIT_URL}/${benefit.id}`, benefit)
    .then((response: AxiosResponse<Response<Benefit>>) => response.data)
    .then((response: Response<Benefit>) => response.data)
}

const deleteBenefit = (benefitId: ID): Promise<void> => {
  return axios.delete(`${BENEFIT_URL}/${benefitId}`).then(() => {})
}

const deleteSelectedBenefits = (benefitIds: Array<ID>): Promise<void> => {
  const requests = benefitIds.map((id) => axios.delete(`${BENEFIT_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getBenefits, deleteBenefit, deleteSelectedBenefits, getBenefitById, createBenefit, updateBenefit}
