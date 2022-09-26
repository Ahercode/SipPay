import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Region = {
  id?: ID
  name?: string
  // avatar?: string
  email?: string
  // position?: string
  role?: string
  // last_login?: string
  // two_steps?: boolean
  // joined_day?: string
  // online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type RegionsQueryResponse = Response<Array<Region>>

export const initialRegion: Region = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  role: 'Administrator',
  name: '',
  email: '',
}
