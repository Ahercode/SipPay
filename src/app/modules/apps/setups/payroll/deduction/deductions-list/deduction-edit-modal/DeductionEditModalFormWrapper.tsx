import {useQuery} from 'react-query'
import {DeductionEditModalForm} from './DeductionEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDeductionById} from '../core/_requests'

const DeductionEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: deduction,
    error,
  } = useQuery(
    `${QUERIES.DEDUCTIONS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getDeductionById(itemIdForUpdate)
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
    return <DeductionEditModalForm isDeductionLoading={isLoading} deduction={{id: undefined}} />
  }

  if (!isLoading && !error && deduction) {
    return <DeductionEditModalForm isDeductionLoading={isLoading} deduction={deduction} />
  }

  return null
}

export {DeductionEditModalFormWrapper}
