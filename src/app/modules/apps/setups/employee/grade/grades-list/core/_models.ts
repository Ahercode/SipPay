import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Grade = {
  id?: ID
  name?: string
  code?: string
  description?: string
  paygroup?: string
  
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type GradesQueryResponse = Response<Array<Grade>>

export const initialGrade: Grade = {
  code: '',
  name: '',
  paygroup: '',
  status: true,
}
