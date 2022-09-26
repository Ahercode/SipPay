import {useQuery} from 'react-query'
import {CurrencyEditModalForm} from './CurrencyEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getCurrencyById} from '../core/_requests'

const CurrencyEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: currency,
    error,
  } = useQuery(
    `${QUERIES.CURRENCYS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getCurrencyById(itemIdForUpdate)
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
    return <CurrencyEditModalForm isCurrencyLoading={isLoading} currency={{id: undefined}} />
  }

  if (!isLoading && !error && currency) {
    return <CurrencyEditModalForm isCurrencyLoading={isLoading} currency={currency} />
  }

  return null
}

export {CurrencyEditModalFormWrapper}
