import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Nationality = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  
  initials?: {
    label: string
    state: string
  }
}

export type NationalityQueryResponse = Response<Array<Nationality>>

export const initialNationality: Nationality = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  status: true,
  name: '',
  code: '',
}
