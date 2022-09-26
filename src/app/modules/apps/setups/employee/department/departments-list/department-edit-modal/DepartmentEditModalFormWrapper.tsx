import {useQuery} from 'react-query'
import {DepartmentEditModalForm} from './DepartmentEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getDepartmentById} from '../core/_requests'

const DepartmentEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: department,
    error,
  } = useQuery(
    `${QUERIES.DEPARTMENTS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getDepartmentById(itemIdForUpdate)
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
    return <DepartmentEditModalForm isDepartmentLoading={isLoading} department={{id: undefined}} />
  }

  if (!isLoading && !error && department) {
    return <DepartmentEditModalForm isDepartmentLoading={isLoading} department={department} />
  }

  return null
}

export {DepartmentEditModalFormWrapper}
