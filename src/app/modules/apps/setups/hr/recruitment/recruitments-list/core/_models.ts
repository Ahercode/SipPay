import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Recruitment = {
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

export type RecruitmentsQueryResponse = Response<Array<Recruitment>>

export const initialRecruitment: Recruitment = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
