import {useQuery} from 'react-query'
import {DisciplinaryActionEditModalForm} from './DisciplinaryActionEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDisciplinaryActionById} from '../core/_requests'

const DisciplinaryActionEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: disciplinaryAction,
    error,
  } = useQuery(
    `${QUERIES.DISCIPLINARYACTIONS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getDisciplinaryActionById(itemIdForUpdate)
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
    return <DisciplinaryActionEditModalForm isDisciplinaryActionLoading={isLoading} disciplinaryAction={{id: undefined}} />
  }

  if (!isLoading && !error && disciplinaryAction) {
    return <DisciplinaryActionEditModalForm isDisciplinaryActionLoading={isLoading} disciplinaryAction={disciplinaryAction} />
  }

  return null
}

export {DisciplinaryActionEditModalFormWrapper}
