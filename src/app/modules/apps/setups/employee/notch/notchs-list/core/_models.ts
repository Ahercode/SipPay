import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Notch = {
  id?: ID
  name?: string
  salarygrade?: string
  monthly?: number
  status?: boolean
  annual?: string
  online?: boolean
  initials?: {
    label: string
    state: string
  }
}

export type NotchsQueryResponse = Response<Array<Notch>>

export const initialNotch: Notch = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  status: true,
  name: '',
  salarygrade: '',
}
