import {useQuery} from 'react-query'
import {SalaryUpgradeEditModalForm} from './SalaryUpgradeEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getSalaryUpgradeById} from '../core/_requests'

const SalaryUpgradeEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: salaryUpgrade,
    error,
  } = useQuery(
    `${QUERIES.SALARYUPGRADES_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getSalaryUpgradeById(itemIdForUpdate)
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
    return <SalaryUpgradeEditModalForm isSalaryUpgradeLoading={isLoading} salaryUpgrade={{id: undefined}} />
  }

  if (!isLoading && !error && salaryUpgrade) {
    return <SalaryUpgradeEditModalForm isSalaryUpgradeLoading={isLoading} salaryUpgrade={salaryUpgrade} />
  }

  return null
}

export {SalaryUpgradeEditModalFormWrapper}
