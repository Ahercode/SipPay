import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Division = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
 
  initials?: {
    label: string
    state: string
  }
}

export type DivisionsQueryResponse = Response<Array<Division>>

export const initialDivision: Division = {
  name: '',
  code: '',
  status: true,
}
