import {useQuery} from 'react-query'
import {JobtitleEditModalForm} from './JobtitleEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getJobtitleById} from '../core/_requests'

const JobtitleEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: jobtitle,
    error,
  } = useQuery(
    `${QUERIES.JOBTITLES_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getJobtitleById(itemIdForUpdate)
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
    return <JobtitleEditModalForm isJobtitleLoading={isLoading} jobtitle={{id: undefined}} />
  }

  if (!isLoading && !error && jobtitle) {
    return <JobtitleEditModalForm isJobtitleLoading={isLoading} jobtitle={jobtitle} />
  }

  return null
}

export {JobtitleEditModalFormWrapper}
