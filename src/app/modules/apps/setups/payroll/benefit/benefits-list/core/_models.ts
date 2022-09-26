import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Benefit = {
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

export type BenefitsQueryResponse = Response<Array<Benefit>>

export const initialBenefit: Benefit = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
