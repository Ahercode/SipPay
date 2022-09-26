import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Appraisal = {
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

export type AppraisalsQueryResponse = Response<Array<Appraisal>>

export const initialAppraisal: Appraisal = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
