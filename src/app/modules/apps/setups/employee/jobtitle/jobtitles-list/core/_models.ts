import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Jobtitle = {
  id?: ID
  name?: string
  code?: string
  description?: string
  status?: boolean 
  initials?: {
    label: string
    state: string
  }
}

export type JobtitlesQueryResponse = Response<Array<Jobtitle>>

export const initialJobtitle: Jobtitle = {
  // avatar: 'avatars/300-6.jpg',
  // position: 'Art Director',
  code: '',
  name: '',
  description: '',
  status: true,
  
}
