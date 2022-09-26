import {useQuery} from 'react-query'
import {RecruitmentEditModalForm} from './RecruitmentEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getRecruitmentById} from '../core/_requests'

const RecruitmentEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: Recruitment,
    error,
  } = useQuery(
    `${QUERIES.RECRUITMENTS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getRecruitmentById(itemIdForUpdate)
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
    return <RecruitmentEditModalForm isRecruitmentLoading={isLoading} recruitment={{id: undefined}} />
  }

  if (!isLoading && !error && Recruitment) {
    return <RecruitmentEditModalForm isRecruitmentLoading={isLoading} recruitment={Recruitment} />
  }

  return null
}

export {RecruitmentEditModalFormWrapper}
