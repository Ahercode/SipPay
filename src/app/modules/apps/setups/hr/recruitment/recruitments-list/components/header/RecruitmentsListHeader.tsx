import {useListView} from '../../core/ListViewProvider'
import {RecruitmentsListToolbar} from './RecruitmentListToolbar'
import {RecruitmentsListGrouping} from './RecruitmentsListGrouping'
import {RecruitmentsListSearchComponent} from './RecruitmentsListSearchComponent'

const RecruitmentsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <RecruitmentsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <RecruitmentsListGrouping /> : <RecruitmentsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {RecruitmentsListHeader}
