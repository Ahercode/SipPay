import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Overtime = {
  id?: ID
  name?: string
  avatar?: string
  email?: string
  position?: string
  role?: string
  last_login?: string
  two_steps?: boolean
  joined_day?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type OvertimesQueryResponse = Response<Array<Overtime>>

export const initialOvertime: Overtime = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
