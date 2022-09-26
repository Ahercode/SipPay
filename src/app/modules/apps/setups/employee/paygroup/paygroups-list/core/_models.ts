import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Paygroup = {
  id?: ID
  name?: string
  code?: string
  status?: string
  
  initials?: {
    label: string
    state: string
  }
}

export type PaygroupsQueryResponse = Response<Array<Paygroup>>

export const initialPaygroup: Paygroup = {
  name: '',
  code: '',
  status: '',
}
