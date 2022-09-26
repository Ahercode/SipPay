import {useQuery} from 'react-query'
import {LeaveEditModalForm} from './LeaveEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getLeaveById} from '../core/_requests'

const LeaveEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: leave,
    error,
  } = useQuery(
    `${QUERIES.LEAVES_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getLeaveById(itemIdForUpdate)
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
    return <LeaveEditModalForm isLeaveLoading={isLoading} leave={{id: undefined}} />
  }

  if (!isLoading && !error && leave) {
    return <LeaveEditModalForm isLeaveLoading={isLoading} leave={leave} />
  }

  return null
}

export {LeaveEditModalFormWrapper}
