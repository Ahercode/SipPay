import {useQuery} from 'react-query'
import {ParameterEditModalForm} from './ParameterEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getParameterById} from '../core/_requests'

const ParameterEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: parameter,
    error,
  } = useQuery(
    `${QUERIES.PARAMETERS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getParameterById(itemIdForUpdate)
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
    return <ParameterEditModalForm isParameterLoading={isLoading} parameter={{id: undefined}} />
  }

  if (!isLoading && !error && parameter) {
    return <ParameterEditModalForm isParameterLoading={isLoading} parameter={parameter} />
  }

  return null
}

export {ParameterEditModalFormWrapper}
