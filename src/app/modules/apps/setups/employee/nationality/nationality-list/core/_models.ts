import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Nationality = {
  id?: ID
  name?: string
  // avatar?: string
  email?: string
  // position?: string
  status?: boolean
  // last_login?: string
  // two_steps?: boolean
  // joined_day?: string
  // online?: boolean
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
  email: '',
}
