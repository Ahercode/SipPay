import axios, {AxiosResponse} from 'axios'
import {ID, Response} from '../../../../../../../../_metronic/helpers'
import {SalaryUpgrade, SalaryUpgradesQueryResponse} from './_models'

const API_URL = process.env.REACT_APP_THEME_API_URL
const SALARYUPGRADE_URL = `${API_URL}/user`
const GET_SALARYUPGRADE_URL = `${API_URL}/users/query`

const getSalaryUpgrades = (query: string): Promise<SalaryUpgradesQueryResponse> => {
  return axios
    .get(`${GET_SALARYUPGRADE_URL}?${query}`)
    .then((d: AxiosResponse<SalaryUpgradesQueryResponse>) => d.data)
}

const getSalaryUpgradeById = (id: ID): Promise<SalaryUpgrade | undefined> => {
  return axios
    .get(`${SALARYUPGRADE_URL}/${id}`)
    .then((response: AxiosResponse<Response<SalaryUpgrade>>) => response.data)
    .then((response: Response<SalaryUpgrade>) => response.data)
}

const createSalaryUpgrade = (SalaryUpgrade: SalaryUpgrade): Promise<SalaryUpgrade | undefined> => {
  return axios
    .put(SALARYUPGRADE_URL, SalaryUpgrade)
    .then((response: AxiosResponse<Response<SalaryUpgrade>>) => response.data)
    .then((response: Response<SalaryUpgrade>) => response.data)
}

const updateSalaryUpgrade = (salaryUpgrade: SalaryUpgrade): Promise<SalaryUpgrade | undefined> => {
  return axios
    .post(`${SALARYUPGRADE_URL}/${salaryUpgrade.id}`, salaryUpgrade)
    .then((response: AxiosResponse<Response<SalaryUpgrade>>) => response.data)
    .then((response: Response<SalaryUpgrade>) => response.data)
}

const deleteSalaryUpgrade = (salaryUpgradeId: ID): Promise<void> => {
  return axios.delete(`${SALARYUPGRADE_URL}/${salaryUpgradeId}`).then(() => {})
}

const deleteSelectedSalaryUpgrades = (salaryUpgradeIds: Array<ID>): Promise<void> => {
  const requests = salaryUpgradeIds.map((id) => axios.delete(`${SALARYUPGRADE_URL}/${id}`))
  return axios.all(requests).then(() => {})
}

export {getSalaryUpgrades, deleteSalaryUpgrade, deleteSelectedSalaryUpgrades, getSalaryUpgradeById, createSalaryUpgrade, updateSalaryUpgrade}
