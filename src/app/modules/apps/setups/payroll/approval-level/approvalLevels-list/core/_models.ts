import {ID, Response} from '../../../../../../../../_metronic/helpers'
export type ApprovalLevel = {
  id?: ID
  name?: string
  level?: string
  status?: boolean
 
  initials?: {
    label: string
    state: string
  }
}

export type ApprovalLevelsQueryResponse = Response<Array<ApprovalLevel>>

export const initialApprovalLevel: ApprovalLevel = {
  
  name: '',
  level: '',
  status: true,
}
