import {useQuery} from 'react-query'
import {RegionEditModalForm} from './RegionEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getRegionById} from '../core/_requests'

const RegionEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: region,
    error,
  } = useQuery(
    `${QUERIES.REGIONS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getRegionById(itemIdForUpdate)
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
    return <RegionEditModalForm isRegionLoading={isLoading} region={{id: undefined}} />
  }

  if (!isLoading && !error && region) {
    return <RegionEditModalForm isRegionLoading={isLoading} region={region} />
  }

  return null
}

export {RegionEditModalFormWrapper}
