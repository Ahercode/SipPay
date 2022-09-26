import {useQuery} from 'react-query'
import {MedicalEditModalForm} from './MedicalEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getMedicalById} from '../core/_requests'

const MedicalEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: medical,
    error,
  } = useQuery(
    `${QUERIES.MEDICALS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getMedicalById(itemIdForUpdate)
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
    return <MedicalEditModalForm isMedicalLoading={isLoading} medical={{id: undefined}} />
  }

  if (!isLoading && !error && medical) {
    return <MedicalEditModalForm isMedicalLoading={isLoading} medical={medical} />
  }

  return null
}

export {MedicalEditModalFormWrapper}
