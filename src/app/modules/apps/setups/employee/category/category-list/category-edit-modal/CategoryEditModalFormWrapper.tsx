import {useQuery} from 'react-query'
import {CategoryEditModalForm} from './CategoryEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getCategoryById} from '../core/_requests'

const CategoryEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: category,
    error,
  } = useQuery(
    `${QUERIES.BANKS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getCategoryById(itemIdForUpdate)
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
    return <CategoryEditModalForm isCategoryLoading={isLoading} category={{id: undefined}} />
  }

  if (!isLoading && !error && category) {
    return <CategoryEditModalForm isCategoryLoading={isLoading} category={category} />
  }

  return null
}

export {CategoryEditModalFormWrapper}
