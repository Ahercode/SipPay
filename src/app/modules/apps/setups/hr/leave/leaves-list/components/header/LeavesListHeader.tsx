import {useListView} from '../../core/ListViewProvider'
import {LeavesListToolbar} from './LeaveListToolbar'
import {LeavesListGrouping} from './LeavesListGrouping'
import {LeavesListSearchComponent} from './LeavesListSearchComponent'

const LeavesListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <LeavesListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <LeavesListGrouping /> : <LeavesListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {LeavesListHeader}
