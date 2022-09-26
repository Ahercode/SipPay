import {useQuery} from 'react-query'
import {PeriodEditModalForm} from './PeriodEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getPeriodById} from '../core/_requests'

const PeriodEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: period,
    error,
  } = useQuery(
    `${QUERIES.PERIODS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getPeriodById(itemIdForUpdate)
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
    return <PeriodEditModalForm isPeriodLoading={isLoading} period={{id: undefined}} />
  }

  if (!isLoading && !error && period) {
    return <PeriodEditModalForm isPeriodLoading={isLoading} period={period} />
  }

  return null
}

export {PeriodEditModalFormWrapper}
