import {useQuery} from 'react-query'
import {ConfigEditModalForm} from './ConfigEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getConfigById} from '../core/_requests'

const ConfigEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: config,
    error,
  } = useQuery(
    `${QUERIES.CONFIGS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getConfigById(itemIdForUpdate)
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
    return <ConfigEditModalForm isConfigLoading={isLoading} config={{id: undefined}} />
  }

  if (!isLoading && !error && config) {
    return <ConfigEditModalForm isConfigLoading={isLoading} config={config} />
  }

  return null
}

export {ConfigEditModalFormWrapper}
