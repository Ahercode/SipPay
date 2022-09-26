import {useListView} from '../../core/ListViewProvider'
import {AppraisalsListToolbar} from './AppraisalListToolbar'
import {AppraisalsListGrouping} from './AppraisalsListGrouping'
import {AppraisalsListSearchComponent} from './AppraisalsListSearchComponent'

const AppraisalsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <AppraisalsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <AppraisalsListGrouping /> : <AppraisalsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {AppraisalsListHeader}
