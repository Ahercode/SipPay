import {useQuery} from 'react-query'
import {NationalityEditModalForm} from './NationalityEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getNationalityById} from '../core/_requests'

const NationalityEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: nationality,
    error,
  } = useQuery(
    `${QUERIES.NATIONALITY_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getNationalityById(itemIdForUpdate)
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
    return <NationalityEditModalForm isNationalityLoading={isLoading} nationality={{id: undefined}} />
  }

  if (!isLoading && !error && nationality) {
    return <NationalityEditModalForm isNationalityLoading={isLoading} nationality={nationality} />
  }

  return null
}

export {NationalityEditModalFormWrapper}
