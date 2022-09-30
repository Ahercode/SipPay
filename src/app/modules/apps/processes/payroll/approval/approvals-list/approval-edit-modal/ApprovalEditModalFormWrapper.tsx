import {useQuery} from 'react-query'
import {ApprovalEditModalForm} from './ApprovalEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getApprovalById} from '../core/_requests'

const ApprovalEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: approval,
    error,
  } = useQuery(
    `${QUERIES.APPROVALS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getApprovalById(itemIdForUpdate)
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
    return <ApprovalEditModalForm isApprovalLoading={isLoading} approval={{id: undefined}} />
  }

  if (!isLoading && !error && approval) {
    return <ApprovalEditModalForm isApprovalLoading={isLoading} approval={approval} />
  }

  return null
}

export {ApprovalEditModalFormWrapper}
