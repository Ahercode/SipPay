import {useQuery} from 'react-query'
import {UnitEditModalForm} from './UnitEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getUnitById} from '../core/_requests'

const UnitEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: unit,
    error,
  } = useQuery(
    `${QUERIES.UNITS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getUnitById(itemIdForUpdate)
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
    return <UnitEditModalForm isUnitLoading={isLoading} unit={{id: undefined}} />
  }

  if (!isLoading && !error && unit) {
    return <UnitEditModalForm isUnitLoading={isLoading} unit={unit} />
  }

  return null
}

export {UnitEditModalFormWrapper}
