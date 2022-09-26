import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Category = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type CategoryQueryResponse = Response<Array<Category>>

export const initialCategory: Category = {
  name: '',
  code: '',
  status: true,
}
