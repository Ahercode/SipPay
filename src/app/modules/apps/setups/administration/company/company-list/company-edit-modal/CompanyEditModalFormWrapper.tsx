import {useQuery} from 'react-query'
import {CompanyEditModalForm} from './CompanyEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getCompanyById} from '../core/_requests'

const CompanyEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: company,
    error,
  } = useQuery(
    `${QUERIES.COMPANY_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getCompanyById(itemIdForUpdate)
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
    return <CompanyEditModalForm isCompanyLoading={isLoading} company={{id: undefined}} />
  }

  if (!isLoading && !error && company) {
    return <CompanyEditModalForm isCompanyLoading={isLoading} company={company} />
  }

  return null
}

export {CompanyEditModalFormWrapper}
