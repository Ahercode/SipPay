import {useQuery} from 'react-query'
import {OvertimeEditModalForm} from './OvertimeEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getOvertimeById} from '../core/_requests'

const OvertimeEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: overtime,
    error,
  } = useQuery(
    `${QUERIES.OVERTIMES_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getOvertimeById(itemIdForUpdate)
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
    return <OvertimeEditModalForm isOvertimeLoading={isLoading} overtime={{id: undefined}} />
  }

  if (!isLoading && !error && overtime) {
    return <OvertimeEditModalForm isOvertimeLoading={isLoading} overtime={overtime} />
  }

  return null
}

export {OvertimeEditModalFormWrapper}
