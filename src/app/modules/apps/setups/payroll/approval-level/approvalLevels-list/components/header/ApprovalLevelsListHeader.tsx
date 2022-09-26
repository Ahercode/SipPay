import {useListView} from '../../core/ListViewProvider'
import {ApprovalLevelsListToolbar} from './ApprovalLevelListToolbar'
import {ApprovalLevelsListGrouping} from './ApprovalLevelsListGrouping'
import {ApprovalLevelsListSearchComponent} from './ApprovalLevelsListSearchComponent'

const ApprovalLevelsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <ApprovalLevelsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <ApprovalLevelsListGrouping /> : <ApprovalLevelsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {ApprovalLevelsListHeader}
