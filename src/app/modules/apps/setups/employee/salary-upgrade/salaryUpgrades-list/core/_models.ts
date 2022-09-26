import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type SalaryUpgrade = {
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

export type SalaryUpgradesQueryResponse = Response<Array<SalaryUpgrade>>

export const initialSalaryUpgrade: SalaryUpgrade = {
  avatar: 'avatars/300-6.jpg',
  position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
