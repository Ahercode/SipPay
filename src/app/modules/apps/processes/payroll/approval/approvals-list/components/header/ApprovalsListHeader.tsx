import {useListView} from '../../core/ListViewProvider'
import {ApprovalsListToolbar} from './ApprovalListToolbar'
import {ApprovalsListGrouping} from './ApprovalsListGrouping'
import {ApprovalsListSearchComponent} from './ApprovalsListSearchComponent'

const ApprovalsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ApprovalsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ApprovalsListGrouping /> : <ApprovalsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ApprovalsListHeader}
