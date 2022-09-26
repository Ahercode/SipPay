import {useQuery} from 'react-query'
import {LoanEditModalForm} from './LoanEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getLoanById} from '../core/_requests'

const LoanEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: loan,
    error,
  } = useQuery(
    `${QUERIES.LOANS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getLoanById(itemIdForUpdate)
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
    return <LoanEditModalForm isLoanLoading={isLoading} loan={{id: undefined}} />
  }

  if (!isLoading && !error && loan) {
    return <LoanEditModalForm isLoanLoading={isLoading} loan={loan} />
  }

  return null
}

export {LoanEditModalFormWrapper}
