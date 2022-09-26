import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Department = {
  id?: ID
  name?: string
  description?: string
  reportingDivision?: string
  status?: boolean
 
}

export type DepartmentsQueryResponse = Response<Array<Department>>

export const initialDepartment: Department = {
  
  name: '',
  description: '',
  reportingDivision: '',
  status: true,
}
