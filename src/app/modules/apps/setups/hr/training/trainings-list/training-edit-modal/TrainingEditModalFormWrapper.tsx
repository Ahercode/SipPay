import {useQuery} from 'react-query'
import {TrainingEditModalForm} from './TrainingEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getTrainingById} from '../core/_requests'

const TrainingEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: training,
    error,
  } = useQuery(
    `${QUERIES.TRAININGS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getTrainingById(itemIdForUpdate)
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
    return <TrainingEditModalForm isTrainingLoading={isLoading} training={{id: undefined}} />
  }

  if (!isLoading && !error && training) {
    return <TrainingEditModalForm isTrainingLoading={isLoading} training={training} />
  }

  return null
}

export {TrainingEditModalFormWrapper}
