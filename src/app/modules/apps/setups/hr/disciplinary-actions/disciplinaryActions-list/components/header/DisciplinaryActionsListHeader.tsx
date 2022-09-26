import {useListView} from '../../core/ListViewProvider'
import {DisciplinaryActionsListToolbar} from './DisciplinaryActionListToolbar'
import {DisciplinaryActionsListGrouping} from './DisciplinaryActionsListGrouping'
import {DisciplinaryActionsListSearchComponent} from './DisciplinaryActionsListSearchComponent'

const DisciplinaryActionsListHeader = () => {
  const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DisciplinaryActionsListSearchComponent />
      {/* begin::Card toolbar */}
      <div className='card-toolbar'>
        {/* begin::Group actions */}
        {selected.length > 0 ? <DisciplinaryActionsListGrouping /> : <DisciplinaryActionsListToolbar />}
        {/* end::Group actions */}
      </div>
      {/* end::Card toolbar */}
    </div>
  )
}

export {DisciplinaryActionsListHeader}
