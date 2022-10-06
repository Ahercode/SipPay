import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type Region = {
  id?: ID
  name?: string
  code?: string
  status?: boolean
  
  initials?: {
    label: string
    state: string
  }
}

export type RegionsQueryResponse = Response<Array<Region>>

export const initialRegion: Region = {
  status: true,
  name: '',
  code: '',
}
