import {useQuery} from 'react-query'
import {SavingSchemeEditModalForm} from './SavingSchemeEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getSavingSchemeById} from '../core/_requests'

const SavingSchemeEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: savingScheme,
    error,
  } = useQuery(
    `${QUERIES.SAVINGSCHEMES_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getSavingSchemeById(itemIdForUpdate)
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
    return <SavingSchemeEditModalForm isSavingSchemeLoading={isLoading} savingScheme={{id: undefined}} />
  }

  if (!isLoading && !error && savingScheme) {
    return <SavingSchemeEditModalForm isSavingSchemeLoading={isLoading} savingScheme={savingScheme} />
  }

  return null
}

export {SavingSchemeEditModalFormWrapper}
