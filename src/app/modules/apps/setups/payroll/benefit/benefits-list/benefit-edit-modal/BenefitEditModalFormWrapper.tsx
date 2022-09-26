import {useQuery} from 'react-query'
import {BenefitEditModalForm} from './BenefitEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getBenefitById} from '../core/_requests'

const BenefitEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: benefit,
    error,
  } = useQuery(
    `${QUERIES.BENEFITS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getBenefitById(itemIdForUpdate)
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
    return <BenefitEditModalForm isBenefitLoading={isLoading} benefit={{id: undefined}} />
  }

  if (!isLoading && !error && benefit) {
    return <BenefitEditModalForm isBenefitLoading={isLoading} benefit={benefit} />
  }

  return null
}

export {BenefitEditModalFormWrapper}
