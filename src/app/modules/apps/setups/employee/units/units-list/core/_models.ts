import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Unit = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type UnitsQueryResponse = Response<Array<Unit>>

export const initialUnit: Unit = {
  // avatar: 'avatars/300-6.jpg',
  status: false,
  code: '',
  name: '',

}
