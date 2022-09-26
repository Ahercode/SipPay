import {useQuery} from 'react-query'
import {DivisionEditModalForm} from './DivisionEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDivisionById} from '../core/_requests'

const DivisionEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: division,
    error,
  } = useQuery(
    `${QUERIES.DIVISIONS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getDivisionById(itemIdForUpdate)
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
    return <DivisionEditModalForm isDivisionLoading={isLoading} division={{id: undefined}} />
  }

  if (!isLoading && !error && division) {
    return <DivisionEditModalForm isDivisionLoading={isLoading} division={division} />
  }

  return null
}

export {DivisionEditModalFormWrapper}
