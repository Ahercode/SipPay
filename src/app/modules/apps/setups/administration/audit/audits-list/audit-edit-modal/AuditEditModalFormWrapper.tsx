import {useQuery} from 'react-query'
import {AuditEditModalForm} from './AuditEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getAuditById} from '../core/_requests'

const AuditEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: audit,
    error,
  } = useQuery(
    `${QUERIES.AUDITS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getAuditById(itemIdForUpdate)
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
    return <AuditEditModalForm isAuditLoading={isLoading} audit={{id: undefined}} />
  }

  if (!isLoading && !error && audit) {
    return <AuditEditModalForm isAuditLoading={isLoading} audit={audit} />
  }

  return null
}

export {AuditEditModalFormWrapper}
