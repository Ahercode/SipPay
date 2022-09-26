import {useQuery} from 'react-query'
import {ApprovalLevelEditModalForm} from './ApprovalLevelEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getApprovalLevelById} from '../core/_requests'

const ApprovalLevelEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: approvalLevel,
    error,
  } = useQuery(
    `${QUERIES.APPROVALLEVELS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getApprovalLevelById(itemIdForUpdate)
    },
    {
      cacheTime: 0,
      enabled: enabledQuery,
      onError: (err) => {
        setItemIdForUpdate(undefined)
        console.error(err)
      },
    }
  )

  if (!itemIdForUpdate) {
    return <ApprovalLevelEditModalForm isApprovalLevelLoading={isLoading} approvalLevel={{id: undefined}} />
  }

  if (!isLoading && !error && approvalLevel) {
    return <ApprovalLevelEditModalForm isApprovalLevelLoading={isLoading} approvalLevel={approvalLevel} />
  }

  return null
}

export {ApprovalLevelEditModalFormWrapper}
