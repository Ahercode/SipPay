import {useQuery} from 'react-query'
import {BankEditModalForm} from './BankEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getBankById} from '../core/_requests'

const BankEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: bank,
    error,
  } = useQuery(
    `${QUERIES.BANKS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getBankById(itemIdForUpdate)
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
    return <BankEditModalForm isBankLoading={isLoading} bank={{id: undefined}} />
  }

  if (!isLoading && !error && bank) {
    return <BankEditModalForm isBankLoading={isLoading} bank={bank} />
  }

  return null
}

export {BankEditModalFormWrapper}
