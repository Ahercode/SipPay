import {useQuery} from 'react-query'
import {AppraisalEditModalForm} from './AppraisalEditModalForm'
import {isNotEmpty, QUERIES} from '../../../../../../../../_metronic/helpers'
import {useListView} from '../core/ListViewProvider'
import {getAppraisalById} from '../core/_requests'

const AppraisalEditModalFormWrapper = () => {
  const {itemIdForUpdate, setItemIdForUpdate} = useListView()
  const enabledQuery: boolean = isNotEmpty(itemIdForUpdate)
  const {
    isLoading,
    data: appraisal,
    error,
  } = useQuery(
    `${QUERIES.APPRAISALS_LIST}-user-${itemIdForUpdate}`,
    () => {
      return getAppraisalById(itemIdForUpdate)
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
    return <AppraisalEditModalForm isAppraisalLoading={isLoading} appraisal={{id: undefined}} />
  }

  if (!isLoading && !error && appraisal) {
    return <AppraisalEditModalForm isAppraisalLoading={isLoading} appraisal={appraisal} />
  }

  return null
}

export {AppraisalEditModalFormWrapper}
