import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type SalaryUpgrade = {
  id?: ID
  fname?: string
  sname?: string

  newBasicSalary?: string
  role?: string
  oldBasicSalary?: string
  department?: string
  initials?: {
    label: string
    state: string
  }
}

export type SalaryUpgradesQueryResponse = Response<Array<SalaryUpgrade>>

export const initialSalaryUpgrade: SalaryUpgrade = {
  
  
  role: 'Administrator',
  fname: '',
  sname: '',
  newBasicSalary: '',
  oldBasicSalary: '',
  department: '',

}
