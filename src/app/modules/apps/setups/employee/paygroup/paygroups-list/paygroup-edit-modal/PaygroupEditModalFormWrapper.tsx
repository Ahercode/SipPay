import {useQuery} from 'react-query'
import {PaygroupEditModalForm} from './PaygroupEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getPaygroupById} from '../core/_requests'

const PaygroupEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: paygroup,
    error,
  } = useQuery(
    `${QUERIES.PAYGROUPS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getPaygroupById(itemIdForUpdate)
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
    return <PaygroupEditModalForm isPaygroupLoading={isLoading} paygroup={{id: undefined}} />
  }

  if (!isLoading && !error && paygroup) {
    return <PaygroupEditModalForm isPaygroupLoading={isLoading} paygroup={paygroup} />
  }

  return null
}

export {PaygroupEditModalFormWrapper}
