import {useQuery} from 'react-query'
import {TaxEditModalForm} from './TaxEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getTaxById} from '../core/_requests'

const TaxEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: tax,
    error,
  } = useQuery(
    `${QUERIES.TAXS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getTaxById(itemIdForUpdate)
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
    return <TaxEditModalForm isTaxLoading={isLoading} tax={{id: undefined}} />
  }

  if (!isLoading && !error && tax) {
    return <TaxEditModalForm isTaxLoading={isLoading} tax={tax} />
  }

  return null
}

export {TaxEditModalFormWrapper}
