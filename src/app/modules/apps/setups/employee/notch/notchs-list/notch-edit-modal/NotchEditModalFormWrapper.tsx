import {useQuery} from 'react-query'
import {NotchEditModalForm} from './NotchEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getNotchById} from '../core/_requests'

const NotchEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: notch,
    error,
  } = useQuery(
    `${QUERIES.NOTCHS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getNotchById(itemIdForUpdate)
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
    return <NotchEditModalForm isNotchLoading={isLoading} notch={{id: undefined}} />
  }

  if (!isLoading && !error && notch) {
    return <NotchEditModalForm isNotchLoading={isLoading} notch={notch} />
  }

  return null
}

export {NotchEditModalFormWrapper}
